import { Effect, print, sessionLogs, toEffect } from "kolmafia";
import { $effect, $effects, sinceKolmafiaRevision } from "libram";

type TestResult = {
  finalMetric: number;
  turns: number;
  predicted: number;
};

export function main(): void {
  sinceKolmafiaRevision(27822);
  const logs = sessionLogs(1);
  if (logs.length === 0) {
    throw "No session logs found.";
  }
  const logText = logs[0];
  const lines = logText.split(/[\r\n]+/);

  const relevantTests = [
    "Booze Drop",
    "Spell Damage",
    "Weapon Damage",
    "Familiar Weight",
    "Combat Rate",
    "Hot Resistance",
    "Moxie",
    "Muscle",
    "Mysticality",
    "HP",
  ];

  const results: { [key: string]: TestResult } = {};

  for (let i = 0; i < lines.length; i++) {
    const totalMetricMatch = lines[i].match(/^> Total (.+?): ([-\d.]+)$/);
    if (totalMetricMatch) {
      const testName = totalMetricMatch[1];
      const finalMetric = parseFloat(totalMetricMatch[2]);
      if (relevantTests.includes(testName)) {
        extractTest(
          lines,
          i,
          testName,
          finalMetric,
          /^> .+? Test takes (\d+) adventure(?:s)? \(predicted: ([-\d.]+)\)\.$/,
          results
        );
      }
    }

    const hpMatch = lines[i].match(/^> Buffed Mus: \d+; HP: (\d+);$/);
    if (hpMatch) {
      const finalMetric = parseFloat(hpMatch[1]);
      extractTest(
        lines,
        i,
        "HP",
        finalMetric,
        /^> HP Test takes (\d+) adventure(?:s)? \(predicted: ([-\d.]+)\)\.$/,
        results
      );
    }
  }

  const freeEffects = $effects`In the Depths, The Sonata of Sneakiness, Empathy, Leash of Linguini, Smooth Movements, Silent Running, Nearly All-Natural, Apriling Band Celebration Bop, Bow-Legged Swagger, Jackasses' Symphony of Destruction, Rage of the Reindeer, Amazing, Antiantifrozen, Elemental Saucesphere, Misty Form, Feeling Peaceful, Astral Shell, Feeling Excited, The Moxious Madrigal, Penne Fedora, Blubbered Up, Disco State of Mind, Mariachi Mood, Gummiheart, Bastille Budgeteer, Disco over Matter, Strength of the Tortoise, Macaroni Coating, Power Ballad of the Arrowsmith, Disdain of the War Snapper, Seal Clubbing Frenzy, Patience of the Tortoise, The Magical Mojomuscular Melody, Disdain of She-Who-Was, Pasta Oneness, Saucemastery, Scowl of the Auk, Ready to Survive, Tenacity of the Snapper, Blessing of the Bird`;

  const cuts = suggestCuts(results);
  for (const test of relevantTests) {
    const cut = cuts[test];
    if (cut !== undefined && cut > 0) {
      print(`You can probably cut ${cut.toFixed(1)} ${test}.`);

      // Only run for effect-based stats like Familiar Weight or Combat Rate
      const effectContribLines = lines.filter((line) =>
        line.includes(`[${test}]`)
      );
      suggestEffectCuts(effectContribLines, test, cut, freeEffects);
    }
  }
}

function suggestCuts(results: { [key: string]: TestResult }): {
  [key: string]: number;
} {
  const savingsRate: { [key: string]: number } = {
    HP: 30,
    Muscle: 30,
    Mysticality: 30,
    Moxie: 30,
    "Familiar Weight": 5,
    "Weapon Damage": 50,
    "Spell Damage": 50,
    "Booze Drop": 15,
    "Item Drop": 30,
    "Hot Resistance": 1,
    "Combat Rate": 5, // treated separately
  };

  const output: { [key: string]: number } = {};

  for (const [test, result] of Object.entries(results)) {
    const { predicted } = result;
    if (predicted >= 0) {
      output[test] = 0;
      continue;
    }

    const rate = savingsRate[test];
    if (!rate) {
      output[test] = NaN;
      continue;
    }

    if (test === "Combat Rate") {
      // 5% saves 3 turns ⇒ 1 turn saved per 5/3% noncombat
      output[test] = (-predicted * 5) / 3;
    } else {
      output[test] = -predicted * rate;
    }
  }

  return output;
}

function extractTest(
  lines: string[],
  i: number,
  testName: string,
  finalMetric: number,
  pattern: RegExp,
  results: { [key: string]: TestResult }
): boolean {
  for (let j = 1; j <= 5 && i + j < lines.length; j++) {
    const match = lines[i + j].match(pattern);
    if (match) {
      results[testName] = {
        finalMetric,
        turns: parseInt(match[1]),
        predicted: parseFloat(match[2]),
      };
      return true;
    }
  }
  return false;
}

function parseEffectContributions(
  lines: string[],
  statName: string
): Record<string, number> {
  const contributions: Record<string, number> = {};
  const linePattern = new RegExp(
    `^> \\[${statName}\\] (.+?) \\(([-\\d.]+)\\)$`
  );

  for (const line of lines) {
    const match = line.match(linePattern);
    if (!match) continue;

    const sourceName = match[1].trim();
    const value = parseFloat(match[2]);

    contributions[sourceName] = value;
  }

  return contributions;
}

function suggestEffectCuts(
  lines: string[],
  statName: string,
  cutTarget: number,
  freeEffects: Effect[]
): void {
  const contributions = parseEffectContributions(lines, statName);
  const cuttable: [string, number][] = [];

  for (const [name, value] of Object.entries(contributions)) {
    const effect = toEffect(name.trim());
    if (effect === $effect`none`) continue;
    if (freeEffects.includes(effect)) continue;
    cuttable.push([name.trim(), value]);
  }

  cuttable.sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

  let remainingCut = cutTarget;
  const selected: [string, number][] = [];

  function isContributionCuttable(stat: string, val: number): boolean {
    if (stat === "Combat Rate") return val < 0;
    // Add any other exceptions here if needed
    return val > 0;
  }

  for (const [name, value] of cuttable) {
    if (remainingCut <= 0) break;
    if (!isContributionCuttable(statName, value)) continue;

    const contributionMagnitude = Math.abs(value);

    if (contributionMagnitude <= remainingCut) {
      selected.push([name, value]);
      remainingCut -= contributionMagnitude;
    } else {
      // Skip effects that are too big to fit
      continue;
    }
  }

  if (selected.length === 0) {
    print(`No non-free effects found to cut for ${statName}.`);
  } else {
    for (const [name, value] of selected) {
      print(
        `Suggest cutting effect "${name}" (${Math.abs(value)}) for ${statName}.`
      );
    }
  }
}

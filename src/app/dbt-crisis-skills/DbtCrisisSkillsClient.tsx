"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types ────────────────────────────────────────────── */

interface Skill {
  letter: string;
  name: string;
  oneLiner: string;
  instructions: string;
  examples: string[];
}

interface SkillGroup {
  id: string;
  acronym: string;
  fullName: string;
  color: string;
  cardFront: string;
  cardBack: string;
  badgeBg: string;
  badgeText: string;
  borderFlipped: string;
  skills: Skill[];
}

interface Props {
  faqData: { question: string; answer: string }[];
}

/* ── Skill Data ──────────────────────────────────────── */

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "tipp",
    acronym: "TIPP",
    fullName: "Change Your Body Chemistry Fast",
    color: "blue",
    cardFront: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30",
    cardBack: "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/40",
    badgeBg: "bg-blue-100 dark:bg-blue-900",
    badgeText: "text-blue-700 dark:text-blue-300",
    borderFlipped: "ring-blue-300 dark:ring-blue-700",
    skills: [
      {
        letter: "T",
        name: "Temperature",
        oneLiner: "Use cold to activate your dive reflex and calm down fast",
        instructions: "Hold a cold pack or ice on your face, especially your cheeks and around your eyes, for 30 seconds. You can also splash very cold water on your face or hold your breath and put your face in a bowl of cold water. This triggers the mammalian dive reflex, which slows your heart rate and calms your nervous system within seconds.",
        examples: [
          "Hold an ice pack or bag of frozen peas against your cheeks and forehead for 30 seconds",
          "Fill a bowl with cold water, hold your breath, and submerge your face for 15-30 seconds",
          "Step outside in cold air and take slow breaths",
        ],
      },
      {
        letter: "I",
        name: "Intense Exercise",
        oneLiner: "Burn off the adrenaline your body is producing",
        instructions: "Do intense physical activity for 10-20 minutes. The goal is to match your body's arousal level — your emotions are intense, so make the exercise intense. This metabolizes stress hormones like cortisol and adrenaline and releases endorphins. You do not need a gym; anything that gets your heart rate up works.",
        examples: [
          "Run up and down stairs for 5-10 minutes",
          "Do jumping jacks, burpees, or push-ups until you feel the intensity drop",
          "Put on music and dance as hard as you can for a full song",
        ],
      },
      {
        letter: "P",
        name: "Paced Breathing",
        oneLiner: "Slow your breath to slow your whole nervous system",
        instructions: "Breathe out slowly, making your exhale longer than your inhale. A common pattern is breathing in for 4 counts and out for 6-8 counts. This activates your parasympathetic nervous system (your body's braking system) and directly counters the fight-or-flight response. Focus on your exhale — that is where the calming happens.",
        examples: [
          "Breathe in for 4 counts, out for 8 counts — repeat for 2-3 minutes",
          "Try box breathing: in for 4, hold for 4, out for 4, hold for 4",
          "Breathe in through your nose, out through pursed lips like blowing through a straw",
        ],
      },
      {
        letter: "P",
        name: "Progressive Relaxation",
        oneLiner: "Release tension by tensing and relaxing each muscle group",
        instructions: "Starting from your toes and moving up, tense each muscle group for 5-10 seconds and then release completely. Notice the difference between tension and relaxation. This works because your body cannot be tense and relaxed at the same time — by systematically releasing tension, you signal safety to your nervous system.",
        examples: [
          "Curl your toes tightly for 10 seconds, then release. Move to calves, thighs, stomach, and up",
          "Clench both fists as hard as you can for 10 seconds, then let them go completely limp",
          "Scrunch your face and shoulders up for 10 seconds, then drop everything and breathe out",
        ],
      },
    ],
  },
  {
    id: "stop",
    acronym: "STOP",
    fullName: "Pause Before You React",
    color: "emerald",
    cardFront: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30",
    cardBack: "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    borderFlipped: "ring-emerald-300 dark:ring-emerald-700",
    skills: [
      {
        letter: "S",
        name: "Stop",
        oneLiner: "Freeze. Do not react. Do not move.",
        instructions: "When you feel an intense urge to act impulsively, literally stop what you are doing. Do not say a word. Do not send that text. Do not make that call. Do not reach for a substance. Just freeze. This brief pause is the most powerful moment because it creates a gap between the trigger and your response — and in that gap, you have a choice.",
        examples: [
          "You are about to send an angry text — put the phone face-down on the table",
          "You feel the urge to use — freeze your hands at your sides and hold still",
          "You are about to say something hurtful — close your mouth and pause",
        ],
      },
      {
        letter: "T",
        name: "Take a Step Back",
        oneLiner: "Create distance — mentally or physically",
        instructions: "Remove yourself from the situation, even slightly. Take a physical step back, leave the room, or mentally detach by imagining you are watching the scene from above. You are not avoiding — you are giving yourself space to think clearly. Intense emotions narrow your focus; stepping back widens it.",
        examples: [
          "Say: 'I need a minute' and walk to another room",
          "Imagine you are watching the situation from a balcony above — what do you see?",
          "Take three slow breaths before doing anything else",
        ],
      },
      {
        letter: "O",
        name: "Observe",
        oneLiner: "Notice what is happening inside and around you",
        instructions: "Without judging, observe what is happening. What are you feeling in your body? What thoughts are going through your mind? What is actually happening in the situation versus what your emotions are telling you? Observation puts you in 'wise mind' — the place between pure emotion and pure logic.",
        examples: [
          "Notice: 'My chest is tight, my jaw is clenched, and I am thinking they did this on purpose'",
          "Ask yourself: 'What are the facts here? What am I adding with my interpretation?'",
          "Scan your body from head to toe and name what you physically feel",
        ],
      },
      {
        letter: "P",
        name: "Proceed Mindfully",
        oneLiner: "Act with awareness, not on autopilot",
        instructions: "Now that you have stopped, stepped back, and observed, choose your next action deliberately. Ask yourself: 'What do I want from this situation? What action will be most effective right now? What would wise mind do?' The goal is not to suppress your feelings but to respond rather than react — to act in a way you will not regret later.",
        examples: [
          "Ask: 'If I respond this way, will I feel better or worse in an hour?'",
          "Choose the response that aligns with your values, not your impulse",
          "Decide on one small, concrete next step rather than a big reaction",
        ],
      },
    ],
  },
  {
    id: "accepts",
    acronym: "ACCEPTS",
    fullName: "Distract Until the Storm Passes",
    color: "amber",
    cardFront: "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30",
    cardBack: "border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40",
    badgeBg: "bg-amber-100 dark:bg-amber-900",
    badgeText: "text-amber-700 dark:text-amber-300",
    borderFlipped: "ring-amber-300 dark:ring-amber-700",
    skills: [
      {
        letter: "A",
        name: "Activities",
        oneLiner: "Do something that demands your attention",
        instructions: "Engage in an activity that requires enough focus to pull your mind away from the distress. The activity does not need to be fun — it just needs to occupy your brain. Physical activities work especially well because they engage both body and mind.",
        examples: [
          "Clean a room, organize a drawer, or do dishes",
          "Play a game that requires concentration (puzzle, Sudoku, video game)",
          "Go for a walk and count your steps or notice details around you",
        ],
      },
      {
        letter: "C",
        name: "Contributing",
        oneLiner: "Help someone else to get out of your own head",
        instructions: "Do something kind for another person. Contributing shifts your focus outward and creates a sense of purpose and connection. It also generates positive emotions that counteract distress. The act does not need to be big — small gestures count.",
        examples: [
          "Text a friend to check in on them",
          "Do a chore for someone in your household without being asked",
          "Donate to a cause you care about or volunteer your time",
        ],
      },
      {
        letter: "C",
        name: "Comparisons",
        oneLiner: "Gain perspective by comparing to harder times",
        instructions: "Compare your current situation to a time you coped with something harder, or to people who are dealing with greater challenges. This is not about minimizing your pain — it is about reminding yourself that you have survived difficult things before and that this moment will pass too.",
        examples: [
          "Remember a past crisis you got through and remind yourself: 'I survived that. I can survive this.'",
          "Think of someone you admire who overcame a major challenge",
          "Compare how you feel right now to how you felt at your worst — notice any difference",
        ],
      },
      {
        letter: "E",
        name: "Emotions",
        oneLiner: "Generate a different emotion to compete with the painful one",
        instructions: "Create an emotional experience that is opposite to or different from what you are feeling. Your brain has difficulty holding two intense emotions at the same time, so introducing a competing emotion can reduce the intensity of distress.",
        examples: [
          "Watch a funny video or comedy special when you feel sad or anxious",
          "Listen to uplifting or calming music that shifts your mood",
          "Look at photos of happy memories or people you love",
        ],
      },
      {
        letter: "P",
        name: "Pushing Away",
        oneLiner: "Mentally set the problem aside for now",
        instructions: "Temporarily push the distressing situation out of your mind. This is not denial — it is intentionally choosing not to engage with the problem right now because you are too overwhelmed to deal with it effectively. You are giving yourself permission to come back to it when you are calmer.",
        examples: [
          "Imagine putting the worry in a box, closing the lid, and placing it on a shelf",
          "Tell yourself: 'I will deal with this at 3 PM tomorrow. Right now, I am taking a break.'",
          "Mentally build a wall between you and the problem — brick by brick",
        ],
      },
      {
        letter: "T",
        name: "Thoughts",
        oneLiner: "Occupy your mind with neutral mental activity",
        instructions: "Fill your mind with thoughts that require concentration but are emotionally neutral. The goal is to crowd out the distressing thoughts by giving your brain something else to process. Simple mental tasks work surprisingly well.",
        examples: [
          "Count backward from 100 by 7s (100, 93, 86, 79...)",
          "Name a city for every letter of the alphabet",
          "Recite song lyrics, a poem, or a prayer from memory",
        ],
      },
      {
        letter: "S",
        name: "Sensations",
        oneLiner: "Use physical sensations to interrupt emotional pain",
        instructions: "Use strong physical sensations to ground yourself in the present moment and interrupt the emotional spiral. Intense but safe sensory input can redirect your nervous system's attention from emotional pain to physical sensation.",
        examples: [
          "Hold an ice cube in your hand and focus on the cold",
          "Snap a rubber band on your wrist (gently)",
          "Eat something with a strong flavor — sour candy, hot sauce, peppermint",
        ],
      },
    ],
  },
  {
    id: "improve",
    acronym: "IMPROVE",
    fullName: "Make the Moment More Bearable",
    color: "purple",
    cardFront: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30",
    cardBack: "border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/40",
    badgeBg: "bg-purple-100 dark:bg-purple-900",
    badgeText: "text-purple-700 dark:text-purple-300",
    borderFlipped: "ring-purple-300 dark:ring-purple-700",
    skills: [
      {
        letter: "I",
        name: "Imagery",
        oneLiner: "Visualize a safe, calm place in your mind",
        instructions: "Close your eyes and create a vivid mental image of a place where you feel safe, calm, and at peace. Engage all your senses — what do you see, hear, smell, and feel? Your nervous system responds to vivid imagery almost as if it were real, so a detailed mental safe place can genuinely calm your body.",
        examples: [
          "Imagine lying on a warm beach — feel the sun, hear the waves, smell the salt air",
          "Picture yourself in a cozy cabin with a fire crackling and snow falling outside",
          "Visualize a protective bubble around you that nothing harmful can penetrate",
        ],
      },
      {
        letter: "M",
        name: "Meaning",
        oneLiner: "Find purpose or meaning in the suffering",
        instructions: "Look for some meaning, lesson, or purpose in what you are going through. This does not mean the suffering is good or deserved — it means you are choosing to make it count for something. Finding meaning is one of the most powerful ways humans cope with adversity.",
        examples: [
          "Ask: 'What might I learn from this experience that could help me or others?'",
          "Think about how going through this could make you stronger or more empathetic",
          "Consider how your struggle might someday help someone else who faces the same thing",
        ],
      },
      {
        letter: "P",
        name: "Prayer",
        oneLiner: "Connect with something greater than yourself",
        instructions: "Whether you are religious, spiritual, or secular, this skill is about surrendering control and connecting to something beyond yourself. It can be traditional prayer, meditation, talking to the universe, or simply acknowledging that you do not have to carry everything alone. The key is letting go of the need to control the outcome.",
        examples: [
          "Say a prayer or mantra that brings you comfort",
          "Meditate on acceptance: 'I cannot control this. I can only control my response.'",
          "Sit quietly and focus on the feeling of being part of something larger",
        ],
      },
      {
        letter: "R",
        name: "Relaxation",
        oneLiner: "Deliberately relax your body to calm your mind",
        instructions: "Use any relaxation technique to reduce physical tension. When your body relaxes, your mind follows. This works because the brain interprets a relaxed body as evidence that you are safe — even if the situation has not changed.",
        examples: [
          "Take a warm bath or shower and focus on how the water feels",
          "Do a body scan: slowly relax each muscle group from your toes to your head",
          "Listen to a guided relaxation or calming sounds for 5-10 minutes",
        ],
      },
      {
        letter: "O",
        name: "One Thing at a Time",
        oneLiner: "Focus only on this moment, this breath, this task",
        instructions: "When you are overwhelmed, your mind is trying to deal with everything at once — the past, the future, every problem stacked on top of each other. This skill asks you to deliberately narrow your focus to just one thing: the current moment, the current breath, the current step. You only need to get through this one moment.",
        examples: [
          "Tell yourself: 'I only have to get through the next 5 minutes. That is all.'",
          "Focus entirely on whatever you are doing right now — washing a dish, taking a step, breathing",
          "When your mind races ahead, gently bring it back: 'Just this. Just now.'",
        ],
      },
      {
        letter: "V",
        name: "Vacation",
        oneLiner: "Take a brief mental or physical escape",
        instructions: "Give yourself a short break from the distress. This is not running away — it is a brief, intentional timeout so you can return with more capacity. Even 20 minutes of mental vacation can reset your ability to cope.",
        examples: [
          "Take a 20-minute walk with no phone and no agenda",
          "Read a few chapters of a book that absorbs you completely",
          "Watch one episode of a comforting show — give yourself full permission to enjoy it",
        ],
      },
      {
        letter: "E",
        name: "Encouragement",
        oneLiner: "Be your own coach with kind self-talk",
        instructions: "Talk to yourself the way a supportive friend or coach would. When you are in distress, your inner voice often becomes harsh and hopeless. Deliberately replace those messages with encouragement. It may feel awkward at first, but self-talk directly affects your emotional state.",
        examples: [
          "Say: 'I am doing the best I can right now, and that is enough.'",
          "Remind yourself: 'This feeling is temporary. It will not last forever.'",
          "Tell yourself: 'I have gotten through hard things before. I will get through this too.'",
        ],
      },
    ],
  },
];

/* All skills flattened for random pick */
const ALL_SKILLS = SKILL_GROUPS.flatMap((g) =>
  g.skills.map((s, i) => ({ groupId: g.id, skillIndex: i, ...s }))
);

/* ── Component ───────────────────────────────────────── */

export function DbtCrisisSkillsClient({ faqData }: Props) {
  const [activeGroup, setActiveGroup] = useState("tipp");
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  const flipKey = (groupId: string, idx: number) => `${groupId}-${idx}`;

  const toggleFlip = useCallback((key: string) => {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const handleRandom = useCallback(() => {
    const pick = ALL_SKILLS[Math.floor(Math.random() * ALL_SKILLS.length)];
    const key = flipKey(pick.groupId, pick.skillIndex);

    setActiveGroup(pick.groupId);
    setFlipped((prev) => ({ ...prev, [key]: true }));
    setHighlightedSkill(key);

    setTimeout(() => {
      document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);

    setTimeout(() => setHighlightedSkill(null), 3000);
  }, []);

  const currentGroup = SKILL_GROUPS.find((g) => g.id === activeGroup)!;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
        <Link href="/" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700 dark:text-neutral-200">DBT Crisis Survival Skills</span>
      </nav>

      {/* Crisis banner — top of page, prominent */}
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800 mb-6">
        <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-1">In crisis right now?</p>
        <ul className="text-sm text-red-700 dark:text-red-300 space-y-0.5">
          <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> (24/7)</li>
          <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
          <li><strong>SAMHSA Helpline:</strong> <strong>1-800-662-4357</strong> (24/7, free)</li>
        </ul>
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        DBT Crisis Survival Skills Cards
      </h1>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl">
        Evidence-based distress tolerance skills from Dialectical Behavior Therapy. Tap any card to see detailed instructions and examples. Use the random button when you need a skill fast.
      </p>

      {/* Random Skill button */}
      <button
        onClick={handleRandom}
        className="w-full sm:w-auto mb-6 px-6 py-3.5 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Give Me a Random Skill
      </button>

      {/* Acronym tabs */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="DBT skill groups">
        {SKILL_GROUPS.map((group) => (
          <button
            key={group.id}
            role="tab"
            aria-selected={activeGroup === group.id}
            onClick={() => setActiveGroup(group.id)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeGroup === group.id
                ? `${group.badgeBg} ${group.badgeText} ring-2 ring-offset-1 ring-offset-white dark:ring-offset-night-950 ${group.borderFlipped}`
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            <span className="font-bold">{group.acronym}</span>
            <span className="hidden sm:inline ml-1.5 font-normal opacity-80">{group.fullName}</span>
          </button>
        ))}
      </div>

      {/* Section heading */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {currentGroup.acronym}: {currentGroup.fullName}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Tap a card to flip it and see instructions
        </p>
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="tabpanel" aria-label={`${currentGroup.acronym} skills`}>
        {currentGroup.skills.map((skill, idx) => {
          const key = flipKey(currentGroup.id, idx);
          const isFlipped = flipped[key] || false;
          const isHighlighted = highlightedSkill === key;

          return (
            <div
              key={key}
              id={key}
              role="button"
              tabIndex={0}
              aria-expanded={isFlipped}
              aria-label={`${skill.letter} - ${skill.name}. ${isFlipped ? "Press to hide details" : "Press to show details"}`}
              onClick={() => toggleFlip(key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip(key);
                }
              }}
              className={`cursor-pointer rounded-xl border-2 transition-all duration-300 ${
                isFlipped ? currentGroup.cardBack : currentGroup.cardFront
              } ${isFlipped ? `ring-2 ${currentGroup.borderFlipped}` : ""} ${
                isHighlighted ? "animate-pulse ring-4 ring-sage-400" : ""
              } focus:outline-none focus:ring-2 focus:ring-sage-400`}
            >
              {/* Front */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 ${currentGroup.badgeBg} ${currentGroup.badgeText}`}>
                    {skill.letter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100 text-lg">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-0.5">
                      {skill.oneLiner}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${isFlipped ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Back (expanded details) */}
                {isFlipped && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700" aria-live="polite">
                    <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed mb-3">
                      {skill.instructions}
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Try This
                      </p>
                      <ul className="space-y-1.5">
                        {skill.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${currentGroup.badgeBg}`} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Educational Content ──────────────────────── */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          About DBT Distress Tolerance Skills
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            <strong>Dialectical Behavior Therapy (DBT)</strong> was developed by Dr. Marsha Linehan in the late 1980s, originally for people with borderline personality disorder and chronic suicidal thoughts. It has since been adapted for a wide range of conditions including depression, anxiety, substance use disorders, eating disorders, and PTSD. DBT is now one of the most extensively researched and evidence-based psychotherapies available.
          </p>
          <p>
            <strong>Distress tolerance skills</strong> are one of DBT&apos;s four core skill modules (alongside mindfulness, emotion regulation, and interpersonal effectiveness). These skills are specifically designed for <em>crisis moments</em> — times when emotions are so intense that rational problem-solving is not yet possible. The goal is not to solve the problem or make the pain go away, but to <strong>survive the crisis without making it worse</strong>.
          </p>
          <p>
            The four acronyms on this page — TIPP, STOP, ACCEPTS, and IMPROVE — represent different categories of crisis survival skills. TIPP changes your body chemistry quickly. STOP prevents impulsive reactions. ACCEPTS provides healthy distraction. IMPROVE makes the moment more bearable. Together, they form a toolkit for getting through intense emotional experiences safely.
          </p>
          <p>
            These skills are educational resources and are not a substitute for DBT therapy with a trained clinician. If you are experiencing a mental health crisis, please reach out to a professional or contact one of the crisis resources listed on this page.
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Authoritative Sources</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1.5">
            <li>
              <a href="https://behavioraltech.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 dark:hover:text-blue-100">
                Behavioral Tech / The Linehan Institute
              </a>{" "}
              — Founded by Dr. Marsha Linehan, the developer of DBT
            </li>
            <li>
              <a href="https://www.samhsa.gov/medications-substance-use-disorders" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 dark:hover:text-blue-100">
                SAMHSA: Substance Use Treatment Resources
              </a>{" "}
              — Federal agency for substance abuse and mental health services
            </li>
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <details key={faq.question} className="group border border-neutral-200 dark:border-neutral-700 rounded-xl">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl transition-colors">
                <h3 className="text-left pr-4">{faq.question}</h3>
                <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {REFLECTION_PROMPTS["dbt-crisis-skills"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["dbt-crisis-skills"].prompts}
          toolName={REFLECTION_PROMPTS["dbt-crisis-skills"].toolName}
        />
      )}

      {/* ── Related Tools ────────────────────────────── */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Related Mental Health Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/safety-plan", label: "Safety Plan", desc: "Build a crisis safety plan" },
            { href: "/box-breathing-exercise", label: "Box Breathing", desc: "Guided breathing exercise" },
            { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", desc: "Sensory grounding technique" },
            { href: "/urge-surfing-timer", label: "Urge Surfing Timer", desc: "Ride out urges with a timer" },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-3 p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-sage-300 dark:hover:border-sage-700 hover:bg-sage-50/50 dark:hover:bg-sage-950/20 transition-colors"
            >
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-100">{tool.label}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Clinical Disclaimer ──────────────────────── */}
      <section className="mt-12">
        <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
          <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Disclaimer</h2>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
            These DBT distress tolerance skills are presented for educational purposes only. This tool is not a substitute for professional DBT therapy with a trained clinician. While these skills are evidence-based, learning them in the context of a therapeutic relationship provides much deeper understanding and more effective application. If you are experiencing a mental health crisis, please contact a professional or use the crisis resources on this page.
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mt-2">
            All content is processed entirely in your browser. Nothing is stored or transmitted to any server.
          </p>
        </div>
      </section>

      {/* ── Crisis Resources (bottom) ────────────────── */}
      <section className="mt-6">
        <div className="p-5 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
          <h2 className="font-semibold text-red-800 dark:text-red-200 mb-2">Crisis Resources</h2>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> (24/7)</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (24/7, free, confidential)</li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li><strong>Veterans Crisis Line:</strong> Call <strong>988</strong>, press 1</li>
          </ul>
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">
            <Link href="/crisis-resources" className="underline hover:text-red-800 dark:hover:text-red-200">
              View all crisis resources and international helplines
            </Link>
          </p>
        </div>
      </section>

      <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
        <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
          Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
        </Link>
      </div>

      {/* ── Reviewer Bio ─────────────────────────────── */}
      <div className="mt-8">
        <ToolReviewerBio />
      </div>
    </main>
  );
}

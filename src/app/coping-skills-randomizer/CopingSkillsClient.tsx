"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── types ─────────────────────────────────────────────── */

type Category = "physical" | "social" | "creative" | "mindfulness" | "cognitive" | "sensory";

interface Skill {
  id: number;
  name: string;
  category: Category;
  instructions: string;
}

interface CategoryInfo {
  label: string;
  icon: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
}

interface Props {
  faqData: { question: string; answer: string }[];
}

/* ── data ──────────────────────────────────────────────── */

const CATEGORY_INFO: Record<Category, CategoryInfo> = {
  physical: {
    label: "Physical", icon: "\uD83C\uDFC3", color: "#ef4444",
    bgLight: "bg-red-50", bgDark: "dark:bg-red-900/20",
    textLight: "text-red-700", textDark: "dark:text-red-300",
  },
  social: {
    label: "Social", icon: "\uD83E\uDD1D", color: "#3b82f6",
    bgLight: "bg-blue-50", bgDark: "dark:bg-blue-900/20",
    textLight: "text-blue-700", textDark: "dark:text-blue-300",
  },
  creative: {
    label: "Creative", icon: "\uD83C\uDFA8", color: "#f59e0b",
    bgLight: "bg-amber-50", bgDark: "dark:bg-amber-900/20",
    textLight: "text-amber-700", textDark: "dark:text-amber-300",
  },
  mindfulness: {
    label: "Mindfulness", icon: "\uD83E\uDDD8", color: "#8b5cf6",
    bgLight: "bg-violet-50", bgDark: "dark:bg-violet-900/20",
    textLight: "text-violet-700", textDark: "dark:text-violet-300",
  },
  cognitive: {
    label: "Cognitive", icon: "\uD83E\uDDE0", color: "#06b6d4",
    bgLight: "bg-cyan-50", bgDark: "dark:bg-cyan-900/20",
    textLight: "text-cyan-700", textDark: "dark:text-cyan-300",
  },
  sensory: {
    label: "Sensory", icon: "\u2728", color: "#10b981",
    bgLight: "bg-emerald-50", bgDark: "dark:bg-emerald-900/20",
    textLight: "text-emerald-700", textDark: "dark:text-emerald-300",
  },
};

const CATEGORY_ORDER: Category[] = ["physical", "social", "creative", "mindfulness", "cognitive", "sensory"];

const SKILLS: Skill[] = [
  /* Physical (9) */
  { id: 1, category: "physical", name: "Take a walk outside", instructions: "Step outside and walk for at least 10 minutes. Focus on the feeling of your feet hitting the ground, the air on your skin, and what you see around you. Walking changes your physical state and moves you away from triggers." },
  { id: 2, category: "physical", name: "Do jumping jacks or push-ups", instructions: "Do as many as you can for 2 minutes. Intense physical activity floods your brain with endorphins and burns off the adrenaline that fuels cravings. You do not need to be in shape \u2014 just move." },
  { id: 3, category: "physical", name: "Stretch your whole body", instructions: "Spend 5 minutes stretching from head to toe. Reach your arms overhead, touch your toes, roll your neck, twist your torso. Pay attention to where you hold tension and breathe into those areas." },
  { id: 4, category: "physical", name: "Splash cold water on your face", instructions: "Run cold water and splash it on your face and the back of your neck for 30 seconds. This activates your dive reflex, which slows your heart rate and calms your nervous system almost instantly." },
  { id: 5, category: "physical", name: "Go for a run or jog", instructions: "Lace up and run for as long as feels right \u2014 even 5 minutes helps. Running releases endorphins, reduces cortisol, and physically removes you from a triggering environment. Walk when you need to." },
  { id: 6, category: "physical", name: "Dance to your favorite song", instructions: "Put on a song you love and dance like no one is watching. Move your whole body. Dancing combines physical movement, music, and joy \u2014 it is nearly impossible to sustain a craving while dancing." },
  { id: 7, category: "physical", name: "Do progressive muscle relaxation", instructions: "Starting with your toes, tense each muscle group for 5 seconds, then release. Work your way up: feet, calves, thighs, stomach, chest, hands, arms, shoulders, face. Notice the contrast between tension and relaxation." },
  { id: 8, category: "physical", name: "Take a cold shower", instructions: "Step into a cold shower for 1 to 3 minutes. The shock of cold water resets your nervous system, boosts alertness, and interrupts the craving cycle. Start with your hands and feet if a full cold shower feels too intense." },
  { id: 9, category: "physical", name: "Clean or organize something", instructions: "Pick one area \u2014 a drawer, a shelf, your desk \u2014 and organize it completely. The physical activity, sense of control, and visible result all work together to shift your mental state." },

  /* Social (8) */
  { id: 10, category: "social", name: "Call a friend or family member", instructions: "Pick up the phone and call someone you trust. You do not have to talk about cravings \u2014 just hearing a friendly voice and connecting with someone changes your brain chemistry. If they do not answer, try someone else." },
  { id: 11, category: "social", name: "Go to a meeting or support group", instructions: "Look up the next available AA, NA, SMART Recovery, or other support group meeting \u2014 many are available online 24/7. Being around people who understand what you are going through is one of the most powerful coping tools." },
  { id: 12, category: "social", name: "Text your sponsor", instructions: "Send a text right now. It can be as simple as: \u201CHaving a tough moment.\u201D Your sponsor has been where you are. They want to hear from you, especially when things are hard. You are not bothering them." },
  { id: 13, category: "social", name: "Visit someone who makes you feel safe", instructions: "Go to the home of someone you trust \u2014 a friend, family member, or neighbor. Physical presence with a safe person reduces stress hormones. You do not need a reason beyond \u201CI wanted company.\u201D" },
  { id: 14, category: "social", name: "Volunteer or help someone", instructions: "Find a small way to help another person right now. Hold a door, carry groceries, offer a compliment, or look up volunteer opportunities near you. Helping others shifts focus away from yourself and activates reward circuits." },
  { id: 15, category: "social", name: "Play with a pet", instructions: "Spend 10 minutes fully engaged with a pet \u2014 yours or a neighbor\u2019s. Petting an animal lowers cortisol and raises oxytocin. If you do not have a pet, watch animal videos \u2014 research shows even that helps." },
  { id: 16, category: "social", name: "Write a letter to someone you care about", instructions: "Grab paper or open your notes app and write a letter to someone important to you. Tell them what they mean to you. You can send it or keep it. The act of expressing gratitude and connection is the coping skill." },
  { id: 17, category: "social", name: "Go to a public place", instructions: "Go to a coffee shop, library, bookstore, or park where other people are around. Being in public makes it harder to act on a craving and reminds you that you are part of a community. Bring headphones if you want space." },

  /* Creative (9) */
  { id: 18, category: "creative", name: "Draw or paint something", instructions: "Grab whatever you have \u2014 pen, pencil, markers, crayons \u2014 and draw anything. It does not need to be good. Scribble, doodle, draw shapes. The act of creating uses the same brain circuits that cravings try to hijack." },
  { id: 19, category: "creative", name: "Write in a journal", instructions: "Open a notebook or note app and write for 5 to 10 minutes. Write about what you are feeling, what triggered the craving, or anything on your mind. Do not edit yourself. Getting thoughts out of your head and onto paper reduces their power." },
  { id: 20, category: "creative", name: "Play an instrument or sing", instructions: "Pick up an instrument or just sing along to a song. Music engages multiple brain regions simultaneously, which interrupts craving loops. Sing loudly in your car, in the shower, wherever. Volume and enthusiasm matter more than talent." },
  { id: 21, category: "creative", name: "Cook or bake something", instructions: "Choose a recipe and make it from scratch. Cooking requires focus, engages your senses, produces a tangible result, and gives you something to eat. Even making toast with elaborate toppings counts." },
  { id: 22, category: "creative", name: "Write a poem or story", instructions: "Write anything \u2014 a haiku, a limerick, a short story, a rant in verse. Creative writing forces your brain to think in patterns other than craving patterns. Give yourself permission to write badly." },
  { id: 23, category: "creative", name: "Take photographs", instructions: "Grab your phone and photograph 10 interesting things around you. Look for patterns, colors, textures, shadows. Photography trains you to notice details, which is a form of mindfulness through a creative lens." },
  { id: 24, category: "creative", name: "Build something with your hands", instructions: "Legos, puzzles, model kits, origami, or just stack objects on your desk. Using your hands for detailed work occupies the motor cortex and prefrontal cortex, leaving less room for craving signals." },
  { id: 25, category: "creative", name: "Color in a coloring book", instructions: "Adult coloring books exist for a reason \u2014 coloring reduces anxiety and stress. If you do not have one, print a free page from the internet or draw your own pattern to fill in. Focus on staying inside the lines." },
  { id: 26, category: "creative", name: "Start a DIY project", instructions: "Reorganize a bookshelf, repot a plant, fix something that has been broken, rearrange furniture. DIY projects combine physical activity, creativity, and problem-solving \u2014 all of which compete with cravings for brain space." },

  /* Mindfulness (9) */
  { id: 27, category: "mindfulness", name: "Practice box breathing", instructions: "Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, hold for 4 seconds. Repeat for 2 to 5 minutes. This activates your parasympathetic nervous system and reduces the fight-or-flight response that fuels cravings." },
  { id: 28, category: "mindfulness", name: "Do a 5-minute meditation", instructions: "Sit comfortably, close your eyes, and focus on your breath. When thoughts come (they will), notice them without judgment and return to your breath. Five minutes of meditation reduces cortisol and activates prefrontal cortex function." },
  { id: 29, category: "mindfulness", name: "Try the 5-4-3-2-1 grounding exercise", instructions: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This grounds you in the present moment and pulls you out of the craving spiral." },
  { id: 30, category: "mindfulness", name: "Do a body scan", instructions: "Close your eyes and slowly move your attention from the top of your head to the tips of your toes. Notice each body part without trying to change anything. Where do you feel tension? Where do you feel calm? Just observe." },
  { id: 31, category: "mindfulness", name: "Practice urge surfing", instructions: "Instead of fighting the craving, observe it like a wave. Notice where you feel it in your body. Watch it rise, peak, and fall. Most cravings peak within 15 to 30 minutes. Use our Urge Surfing Timer for guided support." },
  { id: 32, category: "mindfulness", name: "Sit quietly and observe your thoughts", instructions: "Set a timer for 3 minutes. Sit still and watch your thoughts as if they were clouds passing across the sky. Do not follow them, argue with them, or judge them. Just notice: \u201CThere\u2019s a thought.\u201D" },
  { id: 33, category: "mindfulness", name: "Focus on one thing with full attention", instructions: "Pick one object \u2014 a cup, a plant, your hand \u2014 and study it with complete attention for 2 minutes. Notice every detail: color, texture, weight, temperature. This is mindfulness in its simplest form." },
  { id: 34, category: "mindfulness", name: "Do a walking meditation", instructions: "Walk very slowly, paying full attention to each step. Feel your heel touch down, your weight shift, your toes push off. Walk 10 steps forward, turn around, walk back. The slowness is the point \u2014 it trains your brain to be present." },
  { id: 35, category: "mindfulness", name: "Practice loving-kindness meditation", instructions: "Close your eyes and silently repeat: \u201CMay I be safe. May I be healthy. May I be happy. May I live with ease.\u201D Then extend it to someone you care about, then to someone neutral, then to everyone. This shifts your brain from craving mode to compassion mode." },

  /* Cognitive (8) */
  { id: 36, category: "cognitive", name: "Challenge the thought: \u201CIs this true?\u201D", instructions: "Write down the thought driving your craving (e.g., \u201COne drink won\u2019t hurt\u201D). Then ask: Is this actually true? What is the evidence? What would I tell a friend? This is the core of cognitive behavioral therapy \u2014 thoughts are not facts." },
  { id: 37, category: "cognitive", name: "Write a gratitude list", instructions: "Write down 5 things you are grateful for right now. They can be small: a warm bed, a good meal, a text from a friend. Gratitude activates the same reward circuits that cravings target, but without the destruction." },
  { id: 38, category: "cognitive", name: "List the pros and cons of using", instructions: "Draw a line down the middle of a page. On one side, list the pros of using right now. On the other, list the cons. Be honest about both. Most people find the cons list is much longer \u2014 seeing it in writing makes it real." },
  { id: 39, category: "cognitive", name: "Play the tape forward", instructions: "Imagine acting on the craving. Now fast-forward: what happens an hour later? Tomorrow morning? Next week? Play the full tape \u2014 not just the momentary relief, but the guilt, the consequences, the setback. Compare that to how you will feel if you ride it out." },
  { id: 40, category: "cognitive", name: "Write a letter to your future self", instructions: "Write a letter to yourself one year from now. What do you want your life to look like? What will you be proud of? This connects you to your long-term goals and reminds you what you are working toward." },
  { id: 41, category: "cognitive", name: "Reframe the situation positively", instructions: "Take the current situation and find one way to see it differently. \u201CI\u2019m having a craving\u201D becomes \u201CI\u2019m having a craving and choosing not to act on it \u2014 that is growth.\u201D Reframing does not deny reality; it finds a more helpful perspective." },
  { id: 42, category: "cognitive", name: "List 3 things you have survived", instructions: "Write down 3 hard things you have already made it through. You survived those. You can survive this craving too. This builds self-efficacy \u2014 the belief that you are capable of handling difficulty." },
  { id: 43, category: "cognitive", name: "Read your relapse prevention plan", instructions: "Pull out your written relapse prevention plan and read it now. If you do not have one, build one using our Relapse Prevention Plan Builder. In a craving, your plan does the thinking for you so you do not have to rely on willpower alone." },

  /* Sensory (8) */
  { id: 44, category: "sensory", name: "Hold ice cubes in your hands", instructions: "Grab a few ice cubes and hold them in your palms. The intense cold sensation gives your brain a strong, immediate sensory signal that competes with the craving signal. Hold them until they melt or the craving passes." },
  { id: 45, category: "sensory", name: "Smell something pleasant", instructions: "Find a strong, pleasant scent: essential oil, coffee beans, a favorite lotion, a candle, fresh herbs. Inhale deeply. Smell is processed in the limbic system, the same brain region involved in cravings \u2014 a strong pleasant scent can interrupt the craving circuit." },
  { id: 46, category: "sensory", name: "Listen to calming music", instructions: "Put on headphones and listen to music that makes you feel calm, safe, or happy. Focus on the instruments, the lyrics, the rhythm. Music activates the auditory cortex, prefrontal cortex, and limbic system simultaneously, leaving less neural bandwidth for cravings." },
  { id: 47, category: "sensory", name: "Take a warm shower or bath", instructions: "Step into a warm shower or draw a bath. Let the water run over your body and focus on the warmth and sensation. Warm water relaxes muscles, lowers cortisol, and creates a physical environment that is incompatible with using." },
  { id: 48, category: "sensory", name: "Eat something with a strong flavor", instructions: "Eat a slice of lemon, a peppermint, a spoonful of hot sauce, or a sour candy. The intense taste sensation demands your brain\u2019s attention and interrupts the craving loop. Strong flavors work better than mild ones." },
  { id: 49, category: "sensory", name: "Wrap yourself in a soft blanket", instructions: "Grab the softest blanket you have and wrap yourself in it. Deep pressure and soft textures activate the parasympathetic nervous system \u2014 the same principle behind weighted blankets. Comfort is not weakness; it is a coping skill." },
  { id: 50, category: "sensory", name: "Light a scented candle", instructions: "Light a candle with a scent you enjoy and sit near it. Watch the flame and breathe in the scent. Candlelight is calming, and combining visual focus with pleasant scent engages two senses simultaneously." },
  { id: 51, category: "sensory", name: "Feel different textures", instructions: "Find 3 to 5 objects with different textures: a smooth stone, rough fabric, something soft, something cool. Hold each one and focus entirely on the sensation. This is a tactile grounding technique that pulls you into the present moment." },
];

/* ── component ─────────────────────────────────────────── */

export function CopingSkillsClient({ faqData }: Props) {
  const [activeFilters, setActiveFilters] = useState<Set<Category>>(new Set());
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [lastSkillId, setLastSkillId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);

  /* ── filter logic ────────────────────────────────────── */

  const filteredSkills = activeFilters.size === 0
    ? SKILLS
    : SKILLS.filter((s) => activeFilters.has(s.category));

  const toggleFilter = (cat: Category) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  /* ── randomize ───────────────────────────────────────── */

  const getRandomSkill = useCallback(() => {
    const pool = showFavoritesOnly
      ? filteredSkills.filter((s) => favorites.has(s.id))
      : filteredSkills;
    if (pool.length === 0) return;
    let candidate = pool[Math.floor(Math.random() * pool.length)];
    /* avoid repeating the same skill */
    if (pool.length > 1) {
      while (candidate.id === lastSkillId) {
        candidate = pool[Math.floor(Math.random() * pool.length)];
      }
    }
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSkill(candidate);
      setLastSkillId(candidate.id);
      setIsAnimating(false);
    }, 300);
  }, [filteredSkills, lastSkillId, showFavoritesOnly, favorites]);

  /* ── favorites ───────────────────────────────────────── */

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const favCount = favorites.size;

  /* ── render ──────────────────────────────────────────── */

  const catInfo = currentSkill ? CATEGORY_INFO[currentSkill.category] : null;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* H1 */}
      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
        Coping Skills Randomizer
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-8 leading-relaxed">
        Struggling right now? Press the button and get a healthy coping skill with instructions.
        51 evidence-based skills across 6 categories. Try it, and if it does not help, try another.
      </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

      <AdSlot position="coping-top" />

      {/* ─── CATEGORY FILTERS ──────────────────────────── */}
      <section className="mb-6" aria-label="Category filters">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORY_ORDER.map((cat) => {
            const info = CATEGORY_INFO[cat];
            const active = activeFilters.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  active
                    ? `${info.bgLight} ${info.bgDark} ${info.textLight} ${info.textDark} ring-2 ring-offset-1`
                    : "bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 hover:bg-sand-200 dark:hover:bg-night-700"
                }`}
                style={active ? { "--tw-ring-color": info.color } as React.CSSProperties : undefined}
                aria-pressed={active}
              >
                {info.icon} {info.label}
              </button>
            );
          })}
        </div>
        {activeFilters.size > 0 && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-2">
            Showing {filteredSkills.length} of {SKILLS.length} skills &middot;{" "}
            <button onClick={() => setActiveFilters(new Set())} className="text-sage-600 dark:text-sage-400 hover:underline">
              Clear filters
            </button>
          </p>
        )}
      </section>

      {/* ─── FAVORITES TOGGLE ──────────────────────────── */}
      {favCount > 0 && (
        <div className="text-center mb-4">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
              showFavoritesOnly
                ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                : "bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {showFavoritesOnly ? "\u2605" : "\u2606"} {favCount} favorite{favCount !== 1 ? "s" : ""} {showFavoritesOnly ? "(showing)" : "(show only)"}
          </button>
        </div>
      )}

      {/* ─── BIG BUTTON ────────────────────────────────── */}
      <div className="text-center mb-8">
        <button
          onClick={getRandomSkill}
          disabled={(showFavoritesOnly && filteredSkills.filter((s) => favorites.has(s.id)).length === 0)}
          className="bg-sage-600 hover:bg-sage-700 active:bg-sage-800 text-white font-bold text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {currentSkill ? "Try Another Skill" : "Give Me A Coping Skill"}
        </button>
        {showFavoritesOnly && filteredSkills.filter((s) => favorites.has(s.id)).length === 0 && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            No favorites match current filters. Clear filters or add more favorites.
          </p>
        )}
      </div>

      {/* ─── SKILL CARD ────────────────────────────────── */}
      {currentSkill && catInfo && (
        <section
          className={`card p-6 sm:p-8 mb-8 transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          aria-label="Your coping skill"
          aria-live="polite"
        >
          {/* category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catInfo.bgLight} ${catInfo.bgDark} ${catInfo.textLight} ${catInfo.textDark}`}>
              {catInfo.icon} {catInfo.label}
            </span>
            <button
              onClick={() => toggleFavorite(currentSkill.id)}
              className={`text-xl transition-transform hover:scale-110 ${
                favorites.has(currentSkill.id) ? "text-amber-400" : "text-neutral-300 dark:text-neutral-600"
              }`}
              aria-label={favorites.has(currentSkill.id) ? "Remove from favorites" : "Add to favorites"}
            >
              {favorites.has(currentSkill.id) ? "\u2605" : "\u2606"}
            </button>
          </div>

          {/* skill name */}
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            {currentSkill.name}
          </h2>

          {/* instructions */}
          <div className={`${catInfo.bgLight} ${catInfo.bgDark} rounded-xl p-4 mb-4`}>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
              <span className="font-semibold">How to do it:</span> {currentSkill.instructions}
            </p>
          </div>

          {/* encouragement */}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center italic">
            You do not need to do this perfectly. Just starting is enough.
          </p>
        </section>
      )}

      <AdSlot position="coping-mid" />

      {/* ─── BROWSE ALL ────────────────────────────────── */}
      <section className="mb-12">
        <button
          onClick={() => setShowBrowse(!showBrowse)}
          className="flex items-center justify-between w-full p-4 card hover:bg-sand-50 dark:hover:bg-night-800 transition-colors"
        >
          <span className="font-serif font-bold text-neutral-800 dark:text-neutral-100">
            Browse All {SKILLS.length} Skills
          </span>
          <svg
            className={`w-5 h-5 text-neutral-400 transition-transform ${showBrowse ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showBrowse && (
          <div className="mt-4 space-y-6">
            {CATEGORY_ORDER.map((cat) => {
              const info = CATEGORY_INFO[cat];
              const catSkills = SKILLS.filter((s) => s.category === cat);
              return (
                <div key={cat}>
                  <h3 className={`font-serif font-bold ${info.textLight} ${info.textDark} mb-3 flex items-center gap-2`}>
                    <span>{info.icon}</span> {info.label}
                    <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">({catSkills.length})</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {catSkills.map((skill) => (
                      <button
                        key={skill.id}
                        onClick={() => { setCurrentSkill(skill); setLastSkillId(skill.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={`flex items-center justify-between p-3 rounded-xl text-left text-sm transition-colors ${info.bgLight} ${info.bgDark} hover:opacity-80`}
                      >
                        <span className="text-neutral-700 dark:text-neutral-200 font-medium pr-2">
                          {skill.name}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(skill.id); }}
                          className={`shrink-0 text-base ${favorites.has(skill.id) ? "text-amber-400" : "text-neutral-300 dark:text-neutral-600"}`}
                          aria-label={favorites.has(skill.id) ? "Remove from favorites" : "Add to favorites"}
                        >
                          {favorites.has(skill.id) ? "\u2605" : "\u2606"}
                        </button>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Why Coping Skills Matter in Recovery
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Substances hijack your brain&rsquo;s coping system. Over time, alcohol, drugs, or other substances
          become the <em>only</em> way your brain knows how to manage stress, boredom, anger, loneliness,
          or celebration. When you remove the substance, you need something to fill that role — otherwise,
          your brain will default to the only solution it knows.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          <strong>Healthy coping skills</strong> are the replacement. Each time you use a coping skill instead
          of a substance, you strengthen a new neural pathway. Over time, these pathways become your brain&rsquo;s
          default response. Research published in the <em>Journal of Substance Abuse Treatment</em> found that
          people with a larger repertoire of coping skills were significantly less likely to relapse.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          The key insight is that <strong>one coping skill is not enough</strong>. Different situations call
          for different tools. A physical coping skill that works when you are angry may not help when you are
          lonely. This is why we include skills across six categories — so you always have an option that fits.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          The Six Categories of Coping Skills
        </h2>
        <div className="space-y-3 mb-6">
          {CATEGORY_ORDER.map((cat) => {
            const info = CATEGORY_INFO[cat];
            const descriptions: Record<Category, string> = {
              physical: "Movement and body-based skills that change your physical state. Exercise releases endorphins, cold water activates the dive reflex, and cleaning gives you a sense of control. Physical skills work fastest when you have nervous energy.",
              social: "Connection-based skills that reduce isolation. Loneliness is one of the strongest relapse triggers. Even brief human contact — a phone call, a text, being in a public place — changes your brain chemistry and reminds you that you are not alone.",
              creative: "Expression-based skills that redirect mental energy. Creating something — anything — engages the same reward circuits that cravings target. You do not need to be talented; the act of creation is the coping mechanism.",
              mindfulness: "Awareness-based skills that help you observe cravings without acting on them. Mindfulness does not make cravings disappear — it changes your relationship with them so they have less power over your behavior.",
              cognitive: "Thought-based skills that challenge unhelpful thinking patterns. Cravings often come with distorted thoughts like 'one drink won\u2019t hurt' or 'I can\u2019t handle this.' Cognitive skills help you see these thoughts for what they are: thoughts, not facts.",
              sensory: "Sense-based skills that use strong sensory input to interrupt craving signals. Your brain has limited bandwidth — a powerful taste, smell, sound, or physical sensation competes with the craving for attention.",
            };
            return (
              <div key={cat} className={`${info.bgLight} ${info.bgDark} rounded-xl p-4`}>
                <h3 className={`font-semibold ${info.textLight} ${info.textDark} mb-1 flex items-center gap-2`}>
                  <span>{info.icon}</span> {info.label}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {descriptions[cat]}
                </p>
              </div>
            );
          })}
        </div>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Building Your Coping Toolkit
        </h2>
        <ol className="space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 list-decimal list-inside">
          <li><strong>Try many skills.</strong> Use this randomizer to discover skills you may not have tried. Not every skill works for every person.</li>
          <li><strong>Pick 3 to 5 go-to skills.</strong> Mark them as favorites here. These are your first line of defense when a craving hits.</li>
          <li><strong>Practice when calm.</strong> Practice your top skills when you are not in crisis so they become automatic when you need them.</li>
          <li><strong>Cover all categories.</strong> Have at least one skill from each category so you are prepared for any situation.</li>
          <li><strong>Write them down.</strong> Put your top skills on a card in your wallet, on your phone lock screen, or in your relapse prevention plan.</li>
        </ol>

        {/* internal links */}
        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-3 uppercase tracking-wider">
            Related Recovery Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Urge Surfing Timer
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Guided timer to ride out cravings with mindfulness</span>
            </li>
            <li>
              <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                HALT Check-In
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Check if hunger, anger, loneliness, or tiredness is driving your craving</span>
            </li>
            <li>
              <Link href="/trigger-identification-worksheet" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Trigger Identification Worksheet
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Identify your triggers across 6 categories with coping strategies</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq) => (
            <details key={faq.question} className="group card p-0 overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer select-none hover:bg-sand-50 dark:hover:bg-night-800 transition-colors">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-4 h-4 text-neutral-400 shrink-0 transition-transform group-open:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {REFLECTION_PROMPTS["coping-skills-randomizer"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["coping-skills-randomizer"].prompts}
          toolName={REFLECTION_PROMPTS["coping-skills-randomizer"].toolName}
        />
      )}

      {/* ─── YMYL FOOTER ──────────────────────────────── */}
      <footer className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <div className="bg-sand-100 dark:bg-night-800 rounded-xl p-5 border border-sand-200 dark:border-neutral-700">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Clinical Disclaimer</p>
          <p className="leading-relaxed">
            This tool is for educational and self-help purposes only. Coping skills are one component of a
            comprehensive recovery approach and are not a substitute for professional counseling, therapy,
            or medical care. If you are in crisis or struggling with substance use, please reach out to a
            qualified professional.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 rounded-xl p-5 border border-crisis-200 dark:border-crisis-800">
          <p className="font-semibold text-crisis-700 dark:text-crisis-300 mb-2">
            Need Help Now?
          </p>
          <ul className="space-y-1 text-crisis-600 dark:text-crisis-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, 24/7)</li>
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          </ul>
        </div>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          This tool runs entirely in your browser. No data is stored, transmitted, or collected.
          Your selections are completely private.
        </p>
      </footer>
    </main>
  );
}

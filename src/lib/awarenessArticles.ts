/** Source-checked editorial drafts, not evidence of human or clinical approval. */
export const AWARENESS_SOURCE_CHECKED = "2026-08-26";
export const AWARENESS_REVIEW_STATUS = "pending-qualified-review";
export const AWARENESS_HUB_PATH = "/awareness/august";

export const awarenessSources = {
  wellness: { title: "U.S. Government Publishing Office: National Wellness Month", url: "https://govbooktalk.gpo.gov/2022/08/22/national-wellness-month/" },
  nimh: { title: "NIMH: Caring for Your Mental Health", url: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health" },
  griefDay: { title: "NAMI: National Grief Awareness Day (2026)", url: "https://stigmafree.nami.org/event/national-grief-awareness-day/2026-08-30/" },
  grief: { title: "National Institute on Aging: Coping With Grief and Loss", url: "https://www.nia.nih.gov/health/grief-and-mourning/coping-grief-and-loss" },
  fentanylDay: { title: "CDC: National Fentanyl Prevention and Awareness Day", url: "https://www.cdc.gov/overdose-prevention/php/toolkits/fentanyl-prevention-awareness-day.html" },
  fentanylFacts: { title: "CDC: Fentanyl Facts", url: "https://www.cdc.gov/stop-overdose/caring/fentanyl-facts.html" },
  overdoseResponse: { title: "CDC: What to Do If You Think Someone Is Overdosing", url: "https://www.cdc.gov/stop-overdose/response/index.html" },
  overdoseDay: { title: "CDC: International Overdose Awareness Day toolkit", url: "https://www.cdc.gov/overdose-prevention/php/toolkits/ioad.html" },
  overdoseMonth: { title: "End Overdose: its August 2026 awareness campaign", url: "https://endoverdose.net/campaign/" },
  overdoseWeek: { title: "SAMHSA: Overdose Awareness Week", url: "https://www.samhsa.gov/about/digital-toolkits/overdose-awareness-week" },
  campaign: { title: "Penington Institute: official IOAD campaign resources", url: "https://www.overdoseday.com/campaign-resources/" },
  events: { title: "Penington Institute: IOAD event tips", url: "https://www.overdoseday.com/event-tips/" },
  mentalHealthMonth: { title: "SAMHSA: Mental Health Awareness Month", url: "https://www.samhsa.gov/about/digital-toolkits/mental-health-awareness-month" },
  recoveryMonth: { title: "SAMHSA: National Recovery Month", url: "https://www.samhsa.gov/about/digital-toolkits/recovery-month" },
} as const;

export type AwarenessSourceKey = keyof typeof awarenessSources;
export type AwarenessSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  sources?: AwarenessSourceKey[];
};
export type AwarenessArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  observance: string;
  dateLabel: string;
  answer: string;
  answerSources: AwarenessSourceKey[];
  image: string;
  imageAlt: string;
  emergency: boolean;
  sections: AwarenessSection[];
  faqs: { question: string; answer: string; sources?: AwarenessSourceKey[] }[];
  related: string[];
};

export const awarenessArticles: AwarenessArticle[] = [
  {
    slug: "national-wellness-month",
    title: "National Wellness Month: a realistic August plan",
    seoTitle: "National Wellness Month: August Ideas",
    description: "August is National Wellness Month. Explore optional ideas for individuals and community groups, with mental-health context and no transformation promises.",
    observance: "National Wellness Month",
    dateLabel: "All August",
    answer: "August is National Wellness Month, an opportunity to make everyday well-being easier to support. Mental health belongs in that conversation, but a wellness activity is not a diagnosis, treatment, or test of how well someone is coping.",
    answerSources: ["wellness", "nimh"],
    image: "/images/awareness/wellness.webp",
    imageAlt: "Illustration of a blank notebook, a glass of water, and a leafy plant on a sunlit table.",
    emergency: false,
    sections: [
      {
        id: "meaning", title: "What does National Wellness Month mean?",
        paragraphs: [
          "The U.S. Government Publishing Office identifies August as National Wellness Month. That is an observance, not a requirement to buy a product, complete a challenge, or publicly report your health. This guide uses the month as a practical planning prompt, not a clinical program.",
          "NIMH describes mental health as including emotional, psychological, and social well-being. Its self-care guidance includes rest, enjoyable activities, manageable priorities, and supportive connections. Different people need different kinds of support. A month on the calendar cannot account for disability, shift work, caring responsibilities, money, or access to care.",
        ], sources: ["wellness", "nimh"],
      },
      {
        id: "small-plan", title: "Build a small plan, not another obligation",
        paragraphs: [
          "Here is an optional planning exercise, not a scored worksheet. Start with one part of the day you would like to make less difficult. Choose something you control, keep the first version small, and give yourself permission to change it. You do not need to record anything on this website.",
        ],
        items: [
          "Name one practical aim: for example, making room for a short break or arranging time with a friend.",
          "Choose a version that fits your circumstances. A phone call may be more workable than meeting in person; a quiet indoor activity may suit you better than an outdoor event.",
          "Remove one obstacle: put a library book somewhere convenient, leave a gap between appointments, or agree on a time to talk.",
          "At the end of the week, ask whether the arrangement was useful and realistic. Keep it, simplify it, or drop it. No streak, score, or public explanation is needed.",
        ],
      },
      {
        id: "community", title: "Wellness Month ideas for a library, workplace, or community group",
        paragraphs: [
          "A useful event can make resources easier to find without asking anyone to disclose a problem. These are editorial suggestions for organizers, not a validated wellness intervention. Choose one format and make participation genuinely optional.",
        ],
        items: [
          "Create a small resource shelf with current public-health information and the library's own catalog links. Offer a printed list as well as a digital one.",
          "Publish a clear guide to existing support: opening hours, eligibility, cost information, accessibility, and the organization's official contact page.",
          "Offer a quiet reading or craft session with seating and an easy way to leave. Avoid attendance competitions or requests to explain why someone came.",
          "For workplaces, ask what practical conditions could improve: predictable breaks, accessible meeting formats, or clearer workload expectations. Do not turn a health-awareness event into employee screening.",
        ],
      },
      {
        id: "limits", title: "Where wellness advice stops",
        paragraphs: [
          "Self-care can sit alongside professional care; it should not be presented as a replacement. NIMH directs people with mental-health concerns to a primary care provider or qualified mental-health professional. Do not use completion of a wellness challenge to decide whether someone needs help.",
          "Before recommending a program, distinguish a pleasant activity from a claim that it treats or prevents illness. Ask who created the advice, which evidence supports it, what it costs, and what personal information it requests. This article makes no promise that its planning ideas will change a health outcome.",
        ], sources: ["nimh"],
      },
      {
        id: "after-august", title: "Keep what helps after August",
        paragraphs: [
          "For an individual, a useful next step might simply be keeping one workable arrangement. For an organization, it might be correcting an outdated support link or keeping a quiet space available. Neither requires a month-long content campaign.",
          "If you share this guide, share its plain URL. Do not attach a health story, assessment result, or somebody else's private experience. The point is to make a resource available, not to ask people to prove they need it.",
        ],
      },
    ],
    faqs: [
      { question: "Is August Mental Health Awareness Month?", answer: "In the United States, Mental Health Awareness Month is May. August's National Wellness Month is a different observance that can include discussion of mental well-being.", sources: ["mentalHealthMonth", "wellness"] },
      { question: "Do I need a wellness app or paid challenge?", answer: "No. The ideas here need no paid app, account, purchase, or health questionnaire. Use only what fits your circumstances." },
      { question: "Can a wellness plan replace mental-health care?", answer: "No. General wellness information does not diagnose a condition or replace individualized care from a qualified professional.", sources: ["nimh"] },
    ],
    related: ["national-grief-awareness-day"],
  },
  {
    slug: "national-grief-awareness-day",
    title: "National Grief Awareness Day: support without pressure",
    seoTitle: "National Grief Awareness Day: August 30",
    description: "National Grief Awareness Day is August 30. Find respectful ways to offer company, plan an optional remembrance, protect privacy, and find support.",
    observance: "National Grief Awareness Day",
    dateLabel: "August 30",
    answer: "National Grief Awareness Day is observed on August 30. NAMI describes it as a time to make conversations about grief less stigmatized and help people experiencing loss find connection. There is no obligation to share a story or take part in a public event.",
    answerSources: ["griefDay"],
    image: "/images/awareness/grief.webp",
    imageAlt: "Illustration of two empty chairs and two cups around a small table in a quiet garden.",
    emergency: false,
    sections: [
      {
        id: "purpose", title: "An awareness day, not a deadline for grief",
        paragraphs: [
          "August 30 can be an opening to acknowledge loss. It is not a date by which someone should feel better. The National Institute on Aging explains that there is no single right way to mourn and describes different sources of support. This article does not assess whether someone's grief is normal or assign a label to it.",
          "An awareness message also needs to leave room for people who do not want attention. A public invitation should say what will happen and make clear that attendance, conversation, and remembrance are all optional. Silence is not an invitation to investigate someone's private life.",
        ], sources: ["grief", "griefDay"],
      },
      {
        id: "offer-support", title: "Offer something specific and easy to decline",
        paragraphs: [
          "You do not need an impressive speech. The following are example invitations, not therapeutic scripts or promises about how a person will respond. Choose words that sound like you and fit the relationship. If the offer is declined, respect that answer.",
        ],
        items: [
          "Company: 'Would you like some company, or would another day be better?'",
          "Practical help: 'I can pick up groceries on Thursday if that would be useful. No problem if not.'",
          "Remembering: 'Would you like to talk about them, or would you rather do something else together?'",
          "A later check-in: 'Would it be okay if I checked in again next week?'",
        ],
      },
      {
        id: "avoid-pressure", title: "Leave out the comparison and the timetable",
        paragraphs: [
          "For a community post or personal message, keep the focus on the person receiving it. Avoid telling them what the loss means, comparing it with your own experience, or explaining how they should feel. Do not demand a positive takeaway from a painful event.",
          "A simple editorial check is to read your message as an invitation rather than an instruction. Does it allow someone to say no? Does it make an assumption about their beliefs, family, or relationship? Could it expose information they have not chosen to share? Revise those parts before sending or posting anything.",
        ],
      },
      {
        id: "remembrance", title: "A privacy-first remembrance plan for organizers",
        paragraphs: [
          "A library, nonprofit, or workplace can offer space without collecting personal stories. These are practical safeguards for an optional gathering, not a clinical group protocol. If the event is advertised as counseling or grief support, a suitably qualified provider should define and lead that service.",
        ],
        items: [
          "Describe the format in advance: quiet gathering, resource display, reading, or discussion. State whether photography is planned.",
          "Do not add names, photographs, causes of death, or stories to a display without appropriate permission. A public social post is not permission to reuse it.",
          "Let people attend without speaking. Provide seating, an accessible route, and a way to step away without explanation.",
          "Keep public educational materials separate from private conversations. Do not use an attendance list to infer bereavement or target follow-up marketing.",
          "Choose a staff contact for practical questions and point people to established bereavement services. Do not promise confidentiality that an open event cannot provide.",
        ],
      },
      {
        id: "resources", title: "Where can someone find bereavement support?",
        paragraphs: [
          "The National Institute on Aging lists options such as healthcare professionals, support groups, hospice bereavement services, and community organizations. Availability, eligibility, and cost vary. Ask a provider directly what it offers rather than assuming that a calendar listing is a support service.",
          "When comparing services, ask who facilitates the group, whether it is counseling or peer support, what privacy rules apply, whether there is a fee, and how to leave or pause participation. You do not need an online grief score to make an inquiry about available support.",
        ], sources: ["grief"],
      },
    ],
    faqs: [
      { question: "When is National Grief Awareness Day?", answer: "August 30 each year, including August 30, 2026. NAMI lists the annual observance on that date.", sources: ["griefDay"] },
      { question: "Is there one correct way to grieve?", answer: "No. The National Institute on Aging describes mourning as an individual experience, not a single required sequence. This page cannot evaluate a person's grief.", sources: ["grief"] },
      { question: "Do I need to post publicly to take part?", answer: "No. An optional private check-in, a practical offer of help, or choosing not to participate are all alternatives to public posting." },
    ],
    related: ["overdose-awareness-month-day", "national-wellness-month"],
  },
  {
    slug: "fentanyl-prevention-awareness-day",
    title: "August 21: Fentanyl Prevention and Awareness Day",
    seoTitle: "August 21: Fentanyl Prevention & Awareness Day",
    description: "A source-backed guide to National Fentanyl Prevention and Awareness Day on August 21: accurate language, official education resources, and safer event planning.",
    observance: "National Fentanyl Prevention and Awareness Day",
    dateLabel: "August 21",
    answer: "National Fentanyl Prevention and Awareness Day is August 21. CDC identifies it as an observance established by FACING FENTANYL to remember lives lost, support affected families, and share prevention information. This guide focuses on accurate public education, not individual risk assessment.",
    answerSources: ["fentanylDay"],
    image: "/images/awareness/fentanyl.webp",
    imageAlt: "Illustration of a community information table with blank pamphlets, a plant, and an empty noticeboard.",
    emergency: true,
    sections: [
      {
        id: "date", title: "Use the full name and the correct date",
        paragraphs: [
          "Write the full observance name alongside August 21. Shortening every campaign to 'Fentanyl Awareness Day' can make different calendars hard to distinguish. If you are arranging a local activity on another date, show the event date separately from the observance date.",
          "CDC's August 2026 toolkit emphasizes parents, caregivers, families, and community education. Check the current official toolkit before using a year's theme or campaign materials. MindCheck Tools is providing independent educational context; citing an organization does not imply a partnership or endorsement.",
        ], sources: ["fentanylDay"],
      },
      {
        id: "accurate-language", title: "Keep the basic facts accurate",
        paragraphs: [
          "CDC distinguishes pharmaceutical fentanyl, used in medical care, from illegally made fentanyl. Its public information explains that illegally made fentanyl can be mixed into other drugs or pressed into counterfeit pills. Appearance alone cannot establish that a pill or other substance is safe.",
          "That distinction matters in public copy. Do not turn an awareness post into advice to stop a prescribed medicine. Questions about a medicine belong with the prescribing professional or pharmacist. Avoid unsupported local statistics and dramatic imagery that adds alarm without explaining where to find reliable information.",
        ], sources: ["fentanylFacts"],
      },
      {
        id: "resource-table", title: "Build a useful information table in four parts",
        paragraphs: [
          "For an educator, library, or nonprofit, a small, clearly labeled resource table can be more usable than a wall of alarming headlines. The following is an editorial planning format, not a prevention curriculum or emergency-response certification.",
        ],
        items: [
          "Purpose: display the full awareness-day name, the August 21 date, and a short explanation of what the table offers. Do not imply an official partnership.",
          "Facts: link directly to CDC's fentanyl information and show the organization and page title beside the link. Keep a readable printed option for visitors who do not use a phone.",
          "Learning: point to the current CDC campaign toolkit. If a qualified local organization is offering training, verify its audience, time, access arrangements, and official registration route.",
          "Support: provide established local resource contacts and a clear emergency route. No visitor should need to share substance-use history or take a questionnaire to receive information.",
        ], sources: ["fentanylDay", "fentanylFacts", "overdoseResponse"],
      },
      {
        id: "copy-check", title: "Check your message before sharing it",
        paragraphs: [
          "Try a short, factual introduction: 'August 21 is National Fentanyl Prevention and Awareness Day. Our resource table has links to official education materials and local training information. Everyone is welcome to take a copy; no personal information is requested.' Only use that wording if it accurately describes your event.",
          "Then check the details that a generic social template can miss: Does the link work? Is the contact current? Have you separated a future training date from an emergency phone number? Does every statistic have a source, place, and time period? Remove details you cannot verify rather than filling a gap with a confident guess.",
        ],
      },
      {
        id: "boundaries", title: "Protect people, not just the wording",
        paragraphs: [
          "Obtain appropriate permission before sharing a name, photograph, or remembrance. Do not invite people to disclose health details in public comments, use attendance to label someone, or attach a sales offer to a loss story. Keep a general resource table separate from any private service intake.",
          "For practical overdose-response education, use current official guidance and qualified training. This awareness article is not a step-by-step response course. In a suspected overdose, call 911 in the United States or the local emergency number elsewhere immediately; do not wait for a website or screening result.",
        ], sources: ["overdoseResponse"],
      },
    ],
    faqs: [
      { question: "Is August 21 the same as International Overdose Awareness Day?", answer: "No. National Fentanyl Prevention and Awareness Day is August 21; International Overdose Awareness Day is August 31. The latter addresses overdose more broadly.", sources: ["fentanylDay", "overdoseDay"] },
      { question: "Can an awareness article tell whether a substance is safe?", answer: "No. This page cannot identify a substance or determine anyone's risk. CDC warns that fentanyl cannot be identified by appearance, taste, or smell.", sources: ["fentanylFacts"] },
      { question: "Where are the official campaign materials?", answer: "CDC's National Fentanyl Prevention and Awareness Day toolkit links to education materials and the campaign organization. Check the source's current usage terms before reusing logos or graphics.", sources: ["fentanylDay"] },
    ],
    related: ["overdose-awareness-month-day", "national-grief-awareness-day"],
  },
  {
    slug: "overdose-awareness-month-day",
    title: "Overdose awareness in August: dates and respectful action",
    seoTitle: "Overdose Awareness Month & Day: August Guide",
    description: "Understand August overdose-awareness campaigns and the August 31 observance, with a practical checklist for respectful, privacy-first community events.",
    observance: "International Overdose Awareness Day",
    dateLabel: "August 31; related campaigns throughout August",
    answer: "International Overdose Awareness Day is August 31 every year. Some organizations also run Overdose Awareness Month campaigns throughout August. A month-long campaign, an awareness week, and the international day are related but are not interchangeable official dates.",
    answerSources: ["overdoseDay", "overdoseMonth", "overdoseWeek"],
    image: "/images/awareness/overdose.webp",
    imageAlt: "Illustration of purple wildflowers in a ceramic vase on a quiet remembrance table.",
    emergency: true,
    sections: [
      {
        id: "month-week-day", title: "Month, week, and day: what is verified?",
        paragraphs: [
          "The annual international observance is August 31. CDC and Penington Institute's campaign resources confirm that date. Penington Institute coordinates the international campaign; its website is the place to check current campaign materials and event information.",
          "End Overdose describes its own August 2026 campaign as Overdose Awareness Month. This establishes organizational use of the name, not a universal federal designation for the whole month. SAMHSA also maintains an Overdose Awareness Week toolkit. The exact 2026 week date range has not been verified for this guide, so it is deliberately not printed here.",
          "When preparing a flyer, name the particular observance and its source. Keep your local event's date and time separate. An event held earlier in August can support the campaign without suggesting that the international day has moved.",
        ], sources: ["overdoseDay", "campaign", "overdoseMonth", "overdoseWeek"],
      },
      {
        id: "purpose", title: "Choose a purpose before choosing a format",
        paragraphs: [
          "The official IOAD event guide describes both remembrance and educational activities. Decide which purpose you can support well. A quiet remembrance and a practical training session need different facilitation, expectations, and support arrangements; do not advertise one and unexpectedly deliver the other.",
          "You might offer a resource display, host an information session with an appropriately qualified provider, or make a quiet space for optional remembrance. Check the official campaign resources for current materials. These examples are ways to organize information and participation, not evidence that an event will change a clinical outcome.",
        ], sources: ["events", "campaign"],
      },
      {
        id: "planning-checklist", title: "A small-event checklist that protects privacy",
        paragraphs: [
          "Use these editorial checks before announcing an activity. Keep the completed checklist about the event, not the people attending. It should never become a register of who has experienced substance use, overdose, or loss.",
        ],
        items: [
          "Purpose and scope: say whether the activity is remembrance, public education, or training. Identify the facilitator and avoid overstating their qualifications.",
          "Access: verify the venue, seating, step-free access, bathroom access, timing, and a non-digital way to obtain the resource list.",
          "Participation: let visitors listen, leave, or decline to speak without explanation. Do not require a personal story to attend.",
          "Permission: agree in advance how photographs, names, recordings, and tributes will be handled. Do not reuse private messages as public testimonials.",
          "Resources: open every link and check the destination's audience, location, current hours, and stated costs. Separate general information from emergency help.",
          "Response arrangements: identify who will handle an emergency and use qualified providers for response training. An awareness display is not a substitute for emergency planning.",
          "Follow-up: improve the resource list and correct broken details. Do not retarget visitors or infer health information from attendance.",
        ],
      },
      {
        id: "message", title: "Write an invitation that does not turn loss into promotion",
        paragraphs: [
          "A straightforward invitation can say: 'August 31 is International Overdose Awareness Day. We are offering an optional space for remembrance and a table of official education resources. You are welcome to take information without sharing your story.' Adapt the wording to the activity you can actually provide.",
          "Leave out shocking images, unverified impact numbers, required testimonials, and promises that attendance will prevent an overdose. Do not place an affiliate offer or donation pressure beside a remembrance. If you use campaign artwork, follow the source's terms; an independent event should not imply that the campaign organizer endorses its host.",
        ],
      },
      {
        id: "beyond-date", title: "After August 31, keep the practical resource available",
        paragraphs: [
          "A modest next step is to keep the verified contact list available and give someone responsibility for checking it again. Remove expired event details, confirm any local training schedule before sharing it, and retain a plain description of what each service does.",
          "An awareness article cannot determine whether someone is experiencing an overdose or replace emergency care. For current response information, use CDC's official guidance and qualified local training. The emergency notice on this page is intentionally separate from event-planning ideas.",
        ], sources: ["overdoseResponse"],
      },
    ],
    faqs: [
      { question: "Is August officially Overdose Awareness Month everywhere?", answer: "No universal designation has been verified here. Organizations such as End Overdose use August for a month-long campaign. The independently confirmed annual international day is August 31.", sources: ["overdoseMonth", "overdoseDay"] },
      { question: "What are the dates of Overdose Awareness Week in 2026?", answer: "This guide has not verified an exact 2026 date range. Check the current SAMHSA toolkit or an applicable official proclamation before printing a week range.", sources: ["overdoseWeek"] },
      { question: "Can we hold an event on a different day?", answer: "The official IOAD event guide allows a locally suitable event date. Label that date clearly and keep August 31 as the date of the international observance.", sources: ["events"] },
    ],
    related: ["fentanyl-prevention-awareness-day", "national-grief-awareness-day"],
  },
];

export function awarenessArticlePath(slug: string) { return `/awareness/${slug}`; }
export function getAwarenessArticle(slug: string) { return awarenessArticles.find((article) => article.slug === slug); }

export function articleSourceKeys(article: AwarenessArticle): AwarenessSourceKey[] {
  return [...new Set([...article.answerSources, ...article.sections.flatMap((section) => section.sources ?? []), ...article.faqs.flatMap((faq) => faq.sources ?? [])])];
}

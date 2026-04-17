import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/about",
  title: "About — Your Friendly Developer",
  description:
    "The real story behind MindCheck Tools. Built by Jason Ramirez, a self-taught developer and CADC-II counselor from Prunedale, California.",
});

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jason Ramirez",
    jobTitle: "CADC-II Certified Drug and Alcohol Counselor",
    worksFor: {
      "@type": "Organization",
      name: "MindCheck Tools / Your Friendly Developer LLC",
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Prunedale",
      addressRegion: "CA",
      addressCountry: "US",
    },
    url: `${SITE_URL}/about`,
  };
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "About", url: `${SITE_URL}/about` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            About Your Friendly Developer
          </h1>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <p>Hi. I&apos;m Jason Ramirez. This is why I built this.</p>
            <p>
              I&apos;m not going to pretend this started with a vision board or a business plan. It started in a
              storage shed in Salinas in 2013, when I was thirty-seven years old with nothing to my name and nowhere
              to be.
            </p>
            <p>
              I&apos;d been homeless for two years. Living out of my truck, sleeping in a shed behind my son&apos;s
              grandmother&apos;s house. The last two years of my drinking and using looked like that. On September
              27th, 2013, I got sober. Got a bed in a treatment facility. That&apos;s where my life actually started.
            </p>
            <p>
              What nobody tells you about early recovery is how broke it is. Not just financially broke, though that
              too. Broke in every way. No credit. No savings. No plan. No idea what retirement even meant for someone
              like me. I was going to work until I died. That was the whole plan.
            </p>
            <p>Then I got my first laptop.</p>
            <p>
              I&apos;d been working at the treatment center where I got sober. Went from client to overnight staff when
              my old counselor, who had become the director, offered me the job. He saw something in me I couldn&apos;t
              see yet. I walked through that door feeling like a complete fraud. I walked through it anyway.
            </p>
            <p>
              On my days off I started trying to figure out how to make money online. I tried probably a hundred
              different things over the next thirteen years. None of them worked. Not because the ideas were bad,
              because I&apos;m an addict, and addicts chase shiny objects. I&apos;d start something, get excited about
              something else, abandon the first thing, chase the new thing. Repeat. For over a decade.
            </p>
            <p>
              What finally changed it wasn&apos;t willpower. It was everything I&apos;d learned in recovery, and in
              the mental health field working with clients, and fixing my own credit from scratch without anyone&apos;s
              help, and figuring out the tax system after years of not filing, and slowly, painfully, teaching myself
              SEO, then content strategy, then AI and LLM optimization, then UI design that actual humans enjoy using.
            </p>
            <p>
              Thirteen years of self-education. Every skill on these sites I learned the hard way because I had to.
            </p>
            <p>
              I built these tools because people like me needed them and couldn&apos;t afford them. People who are
              starting over. People who are broke and scared and trying to figure out a system that was never explained
              to them. People who need real information without the paywall, without the condescension, without the
              assumption that they already know what they&apos;re doing.
            </p>
            <p>
              I still work a full-time job. I&apos;m pursuing my Bachelor of Social Work with plans for my MSW. I take
              photos. And when I get home or get done with school work, I come here. This is the other thing that turns
              me on and settles me down at the same time. There&apos;s something about building something useful that
              hits different when you spent years building nothing.
            </p>
            <p>
              Your Friendly Developer is my LLC. I am the developer. This is my work.
            </p>
            <p>
              If you&apos;re looking for the guy behind these sites, it&apos;s me. A CADC-II counselor, a self-taught
              web builder, a recovering addict with over twelve years of sobriety, a guy who fixed his own credit and
              figured out his own taxes and is still figuring out everything else one day at a time.
            </p>
            <p>I&apos;m not a corporation. I&apos;m not a content farm. I&apos;m one person who lived a lot of the things these tools are about.</p>
            <p>That&apos;s why I built them.</p>
          </section>

          <section>
            <h2>About MindCheck Tools</h2>
            <p>
              I spent years working in addiction counseling and mental health — first as a client, then as a certified
              counselor. I hold my CADC-II credential and have worked with clients in inpatient treatment, outpatient
              programs, and community mental health settings. I know what it feels like to sit across from someone in
              the worst moment of their life. I know what it feels like to be that person.
            </p>
            <p>
              I built MindCheck Tools because free, private, clinically-grounded mental health screening
              shouldn&apos;t require an insurance card or a $200 copay to access. Every tool here is reviewed for
              clinical accuracy. Every page has crisis resources. Every result comes with a reminder that this is a
              starting point, not a diagnosis.
            </p>
            <p>
              If you&apos;re struggling right now: <strong>988</strong> (call or text). Crisis Text Line: text{" "}
              <strong>HOME to 741741</strong>. SAMHSA: <strong>1-800-662-4357</strong>. You don&apos;t have to figure
              it out alone.
            </p>
          </section>

          <section>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              For clinical credentials and reviewed tools, see{" "}
              <Link
                href="/about/jason-ramirez"
                className="text-sage-600 dark:text-sage-400 underline underline-offset-2 hover:text-sage-700 dark:hover:text-sage-300"
              >
                Jason Ramirez, CADC-II →
              </Link>
            </p>
          </section>

          <section>
            <div className="card p-6 sm:p-8 not-prose border-neutral-200 dark:border-neutral-700">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Jason Ramirez
                <br />
                Your Friendly Developer LLC
                <br />
                Prunedale, California
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

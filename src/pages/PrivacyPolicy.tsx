import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy · Football Pool App'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-border bg-base/85 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-[760px] items-center justify-between px-8 max-sm:px-5">
          <Link to="/" className="font-mono text-sm font-medium text-accent">
            punkelias.dev
          </Link>
          <Link
            to="/"
            className="text-[13px] text-secondary transition-colors duration-150 hover:text-primary"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="px-8 py-16 max-sm:px-5 max-sm:py-12">
        <article className="mx-auto max-w-[760px] [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary [&_h1]:mb-2 [&_h1]:text-[32px] [&_h1]:font-semibold [&_h1]:tracking-[-0.02em] [&_h1]:text-primary [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[20px] [&_h2]:font-medium [&_h2]:text-primary [&_li]:text-[15px] [&_li]:leading-[1.7] [&_li]:font-light [&_li]:text-secondary [&_li]:marker:text-tertiary [&_p]:mb-4 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:font-light [&_p]:text-secondary [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          <h1>Privacy Policy</h1>
          <p className="!text-[13px] !text-tertiary">
            Last updated: June 14, 2026
          </p>

          <p>
            This Privacy Policy explains how information is handled in
            connection with our World Cup prediction app.
          </p>

          <h2>Overview</h2>
          <p>
            Our app is a private prediction game for the FIFA World Cup. It
            allows users to make match predictions, select tournament picks,
            view scores, and participate in leaderboards with friends or private
            groups.
          </p>
          <p>
            This app is for entertainment purposes only. It does not offer
            real-money betting, gambling, prizes, or financial transactions.
          </p>

          <h2>Information We Collect</h2>
          <p>
            Depending on the features you use, we may collect the following
            information:
          </p>
          <ul>
            <li>
              Account information, such as your name, display name, email
              address, or authentication identifier.
            </li>
            <li>
              App activity, such as match predictions, tournament picks,
              wildcard selections, scores, rankings, and leaderboard
              participation.
            </li>
            <li>
              Technical information, such as device type, operating system, app
              version, crash reports, performance data, and basic usage
              information.
            </li>
            <li>
              Notification information, such as a push notification token, if
              notifications are enabled.
            </li>
          </ul>
          <p>
            We do not intentionally collect sensitive personal information,
            financial information, precise location, contacts, health data, or
            payment information.
          </p>

          <h2>How We Use Information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Create and manage user accounts.</li>
            <li>
              Save and display predictions, scores, rankings, and leaderboard
              data.
            </li>
            <li>
              Operate app features such as private groups, match prediction
              flows, and tournament picks.
            </li>
            <li>Improve app performance, reliability, and user experience.</li>
            <li>Send app-related notifications, if enabled.</li>
            <li>
              Prevent abuse, troubleshoot issues, and maintain app security.
            </li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>We do not sell personal information.</p>
          <p>
            Some information may be visible to other users of the app, such as
            your display name, points, ranking, predictions, or leaderboard
            position, depending on the app features and group settings.
          </p>
          <p>
            We may use trusted third-party services to operate the app,
            including hosting, authentication, database, analytics, crash
            reporting, notifications, and cloud infrastructure. These services
            may process information only as needed to provide their
            functionality.
          </p>
          <p>
            We may also disclose information if required by law or to protect
            the rights, safety, or security of users, the app, or the public.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The app may use third-party services such as Firebase or other
            cloud-based tools for authentication, data storage, analytics, crash
            reporting, notifications, and hosting.
          </p>
          <p>
            These services may collect technical and usage data according to
            their own privacy policies.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep information for as long as needed to operate the app,
            provide app features, maintain leaderboards, resolve issues, comply
            with legal obligations, or protect app security.
          </p>

          <h2>Account and Data Deletion</h2>
          <p>
            If you want to request deletion of your account or associated app
            data, you can contact us at:
          </p>
          <p>
            <a href="mailto:me@punkelias.com">me@punkelias.com</a>
          </p>
          <p>
            Please include the email address or account identifier associated
            with your app account so we can process your request.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            The app is intended for general audiences and is not directed
            specifically to children. We do not knowingly collect personal
            information from children without appropriate consent. If you
            believe a child has provided personal information, please contact us
            so we can review and delete it if necessary.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect information handled by the app.
            However, no digital service can guarantee complete security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised “Last updated” date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us
            at:
          </p>
          <p>
            <a href="mailto:me@punkelias.com">me@punkelias.com</a>
          </p>
        </article>
      </main>

      <Footer />
    </>
  )
}

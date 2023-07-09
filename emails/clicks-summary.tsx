import {
  Body,
  Link,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Column,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Link2, MousePointerClick } from "lucide-react";
import { DUB_LOGO } from "../lib/constants";
import { nFormatter, truncate } from "../lib/utils";

export default function ClicksSummary({
  email = "panic@thedis.co",
  projectName = "Acme",
  projectSlug = "acme",
  totalClicks = 63689,
  createdLinks = 25,
  bestPerformingLinks = [
    {
      link: "acme.com/sales",
      clicks: 2187,
    },
    {
      link: "acme.com/instagram",
      clicks: 1820,
    },
    {
      link: "acme.com/facebook",
      clicks: 1552,
    },
    {
      link: "acme.com/twitter",
      clicks: 1229,
    },
    {
      link: "acme.com/linkedin",
      clicks: 1055,
    },
  ],
}: {
  email: string;
  projectName: string;
  projectSlug: string;
  totalClicks: number;
  createdLinks: number;
  bestPerformingLinks: {
    link: string;
    clicks: number;
  }[];
}) {
  return (
    <Html>
      <Head />
      <Preview>Your 30-day Dub summary</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src={DUB_LOGO}
                width="40"
                height="40"
                alt="Dub"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Your 30-day Dub summary
            </Heading>
            <Text className="text-sm leading-6 text-black">
              In the last 30 days, your Dub project,{" "}
              <strong>{projectName}</strong> received{" "}
              <strong>{nFormatter(totalClicks)} link clicks</strong>. You also
              created <strong>{createdLinks} new links</strong> during that
              time.
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200">
                    <MousePointerClick className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-black">
                    {nFormatter(totalClicks)} clicks
                  </p>
                </Column>
                <Column align="center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-200">
                    <Link2 className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-sm font-semibold text-black">
                    {nFormatter(createdLinks)} new links
                  </p>
                </Column>
              </Row>
            </Section>
            <Text className="text-sm leading-6 text-black">
              Here are your top 5 best performing links:
            </Text>
            <Section>
              <Row className="pb-2">
                <Column align="left" className="text-sm text-gray-500">
                  Link
                </Column>
                <Column align="right" className="text-sm text-gray-500">
                  Clicks
                </Column>
              </Row>
              {bestPerformingLinks.map(({ link, clicks }, index) => (
                <div key={index}>
                  <Row>
                    <Column align="left" className="text-sm font-medium">
                      {truncate(link, 30)}
                    </Column>
                    <Column align="right" className="text-sm text-gray-600">
                      {nFormatter(clicks)}
                    </Column>
                  </Row>
                  {index !== bestPerformingLinks.length - 1 && (
                    <Hr className="my-2 w-full border border-gray-200" />
                  )}
                </div>
              ))}
            </Section>
            <Text className="mt-10 text-sm leading-6 text-black">
              You can view your full stats by clicking the button below.
            </Text>
            <Section className="my-8 text-center">
              <Link
                className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`https://app.dub.sh/${projectSlug}/settings/billing`}
              >
                View my stats
              </Link>
            </Section>
            <Hr className="mx-0 my-6 w-full border border-gray-200" />
            <Text className="text-[12px] leading-6 text-gray-500">
              This invitation was intended for{" "}
              <span className="text-black">{email}</span>. If you were not
              expecting this invitation, you can ignore this email. If you are
              concerned about your account's safety, please reply to this email
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

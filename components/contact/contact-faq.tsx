"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FAQ_ITEMS = [
  {
    question: "What is your project process?",
    answer: "Our process includes discovery, planning, development, testing, and launch phases. Each project is assigned a dedicated team and follows agile methodology for optimal results.",
  },
  {
    question: "What are typical project timelines?",
    answer: "Project timelines vary based on scope and complexity. Simple projects typically take 4-8 weeks, while complex solutions may require 3-6 months for optimal implementation.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms with milestone-based billing. Standard terms include a 30% upfront deposit, with remaining payments tied to project milestones.",
  },
  {
    question: "What does your support coverage include?",
    answer: "Our support coverage includes technical assistance, bug fixes, and system maintenance. We offer different support tiers based on your needs, including 24/7 emergency support.",
  },
];

export function ContactFAQ() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
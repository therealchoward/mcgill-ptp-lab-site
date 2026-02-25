# Content Update Guide

This guide explains how to update content on the McGill PTP Lab website. All content is stored in simple data files that can be edited directly or by asking Claude Code.

## Adding a New Member

1. Add a square headshot photo to `/public/images/members/` (filename should be lowercase lastname, e.g., `smith.jpg`)
2. Edit `src/data/members.ts` and add a new entry to the `members` array:

```typescript
{
  name: "Full Name",
  role: "Role or Title @ McGill University",
  photo: "/images/members/lastname.jpg",
  category: "graduate", // one of: leadership, faculty, postdoc, graduate, undergraduate
},
```

3. Members appear on the site in the order they are listed in the file

## Adding a Publication

Edit `src/data/publications.ts` and add a new entry to the `publications` array. Insert it in the correct chronological position (most recent first):

```typescript
{
  authors: "Last, F., & Last, F.",
  year: "2026",
  title: "Publication title",
  venue: "Journal Name, Volume(Issue), Pages",
  url: "https://doi.org/...",  // optional
  clusters: ["AI Ethics & Policy"],  // one or more of: "AI Ethics & Policy", "Data Ethics & Measurement", "Mental Health & Technology"
},
```

## Adding or Updating an Event

Edit `src/data/events.ts` and add a new entry to the `events` array:

```typescript
{
  title: "Event Title",
  description: "A description of the event...",
  date: "Month Day, Year",
  note: "By invitation only.",  // optional
},
```

## Using Claude Code

You can ask Claude Code to make any of these changes by describing what you want:

- "Add a new member named Jane Smith, she's a Graduate Fellow. Her photo is in the members folder as smith.jpg."
- "Add this publication: [paste citation details]"
- "Add a new event: Workshop on Digital Rights, happening March 15, 2027, open to the public."
- "Remove John Bollinger from the members list"
- "Update the events page — the Mental Health Workshop is now June 27-28 instead of June 25-26"

## Formspree Setup

The contact form on the Support page uses Formspree:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the endpoint URL (e.g., `https://formspree.io/f/xxxxx`)
4. Edit `src/app/support/page.tsx` and replace `YOUR_FORMSPREE_ENDPOINT` with your endpoint ID

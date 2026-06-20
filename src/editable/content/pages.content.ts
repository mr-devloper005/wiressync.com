import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'News, media, and public updates',
      description: 'Explore announcements, newsroom updates, media coverage, and dynamic categories through a clean distribution experience.',
      openGraphTitle: 'News, media, and public updates',
      openGraphDescription: 'Discover media releases, public updates, announcements, and newsroom-ready posts through a focused distribution experience.',
      keywords: ['media distribution', 'press release', 'news updates', 'public relations'],
    },
    hero: {
      badge: 'Latest media and newsroom updates',
      title: ['Media distribution', 'for public updates that need attention.'],
      description: 'Browse distributed media, company announcements, press coverage, public relations updates, and source-ready releases from the live publishing feed.',
      primaryCta: { label: 'Browse latest updates', href: '/updates' },
      secondaryCta: { label: 'Open News Media', href: '/updates?category=news-media' },
      searchPlaceholder: 'Search news, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to distribute and discover media updates.',
    description: `${slot4BrandConfig.siteName} is built for media distribution: announcements, newsroom updates, public relations notes, company releases, and source-ready information in one focused place.`,
    paragraphs: [
      'Instead of burying announcements in a generic feed, the platform gives every release a readable structure, clean archive placement, and direct paths into search.',
      'Visitors can scan headlines quickly, open the details that matter, and move between related updates without losing the context of the distribution stream.',
      'For publishers, the experience keeps the editorial surface polished while preserving the live post flow from the master panel.',
    ],
    values: [
      {
        title: 'Release-first reading',
        description: 'Headlines, summaries, categories, and source details stay clear so visitors can understand each update quickly.',
      },
      {
        title: 'Live distribution flow',
        description: 'Archive, search, home, and detail pages all use the same live post stream instead of disconnected static blocks.',
      },
      {
        title: 'Focused public context',
        description: 'The layout is intentionally restrained so announcements feel credible, useful, and easy to verify.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Reach the media distribution desk.',
    description: 'Send release questions, partnership notes, corrections, account requests, or publishing support messages and we will route them to the right workflow.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find media updates faster.',
      description: 'Use keywords, categories, and content type filters to discover announcements, public updates, and distributed media posts.',
      placeholder: 'Search by release title, company, category, or topic',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to open the media desk.',
      description: 'Use your account to access the publishing workspace and prepare media distribution posts.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a media-ready post.',
      description: 'Choose the distribution type, add release details, source links, summary, and body copy for review.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the media desk.',
      description: 'Login to continue managing submissions, creating distribution posts, and accessing account-only publishing tools.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your media desk account.',
      description: 'Create an account to access publishing tools, submit release details, and prepare media distribution content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const

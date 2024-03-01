import { productCategories } from './product';
import { env } from 'process';

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export const REPOSITORY_OWNER = 'zehan';
export const REPOSITORY_NAME = 'godjira';
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = 'https://discord.gg/';
export const baseUrl = new URL(env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000');

const links = {
  twitter: 'https://x.com/zehan9211',
  github: 'https://github.com/blefnk/zehan12',
  githubAccount: 'https://github.com/zehan12',
  discord: 'https://discord.gg/',
  facebook: 'https://facebook.com/groups/'
};

export const siteConfig = {
  name: 'zehan',
  shortName: 'zk',
  author: 'zehan khan',
  description:
    'NextJS 14 free starter: store, landing, dashboard. It helps you build great eCommerce and SaaS apps faster than ever. Get it!',
  company: {
    name: 'godjira',
    link: 'https://github.com/zehan12/godjira',
    email: 'zehan9211@gmail.com',
    twitter: '@zehan9211'
  },
  handles: {
    twitter: '@zehan9211'
  },
  keywords: ['App Router', 'Stripe', 'T3 Stack', 'Tailwind Css', 'Template', 'Tools', 'Utils'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: REPOSITORY_OWNER
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  mainNav: [
    {
      title: 'Lobby',
      items: [
        {
          title: 'Products',
          href: '/products',
          description: 'All the products we have to offer.',
          items: []
        },
        {
          title: 'Build a Look',
          href: '/custom/clothing',
          description: 'Build your own custom clothes.',
          items: []
        },
        {
          title: 'Blog',
          href: '/blog',
          description: 'Read our latest blog posts.',
          items: []
        }
      ]
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: 'All',
          href: `/categories/${slugify(category.title)}`,
          description: `All ${category.title}.`,
          items: []
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
          description: subcategory.description,
          items: []
        }))
      ]
    }))
  ],
  links,
  footerNav: [
    {
      title: 'Bleverse',
      items: [
        {
          title: 'Community',
          href: 'https://bleverse.com',
          external: true
        },
        {
          title: 'MF Piano',
          href: 'https://mfpiano.org',
          external: true
        },
        {
          title: 'Peresfer',
          href: 'https://peresfer.com',
          external: true
        },
        {
          title: 'Relivator',
          href: 'https://relivator.bleverse.com',
          external: true
        }
      ]
    },
    {
      title: 'Help',
      items: [
        {
          title: 'Contact',
          href: '/contact',
          external: false
        },
        {
          title: 'Privacy',
          href: '/privacy',
          external: false
        },
        {
          title: 'Terms',
          href: '/terms',
          external: false
        },
        {
          title: 'About',
          href: '/about',
          external: false
        }
      ]
    },
    {
      title: 'Social',
      items: [
        {
          title: 'Github',
          href: links.githubAccount,
          external: true
        },
        {
          title: 'Discord',
          href: links.discord,
          external: true
        },
        {
          title: 'Twitter',
          href: links.twitter,
          external: true
        },
        {
          title: 'Facebook',
          href: links.facebook,
          external: true
        }
      ]
    },
    {
      title: 'Github',
      items: [
        {
          title: 'Relivator',
          href: 'https://github.com/blefnk/relivator',
          external: true
        },
        {
          title: 'Reliverse',
          href: 'https://github.com/blefnk/reliverse',
          external: true
        },
        {
          title: 'Blefnk',
          href: 'https://github.com/blefnk',
          external: true
        },
        {
          title: 'Utils',
          href: 'https://github.com/blefnk/utils',
          external: true
        }
      ]
    }
  ]
};

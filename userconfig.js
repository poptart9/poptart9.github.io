// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Moscow",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "RU",
      timezone: "Europe/Moscow",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_19.gif",
      categories: [
        {
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "jisho",
              url: "https://jisho.org/",
              icon: "vocabulary",
            },
            {
              name: "wanikani",
              url: "https://www.wanikani.com/dashboard",
              icon: "grid-pattern",
            },
            {
              name: "pin",
              url: "https://ru.pinterest.com/homefeed/",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
          ],
        },
        {
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "inbox",
              icon_color: palette.red,
            },
            {
              name: "ya mail",
              url: "https://mail.360.yandex.ru/?uid=1130000070004175#/inbox",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "atomic mail",
              url: "https://atomicmail.io",
              icon: "at",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "^_^",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "duckdb",
              url: "https://app.motherduck.com",
              icon: "file-type-sql",
              icon_color: palette.red,
            },
          ],
        },

        {
          name: "video",
          links: [
            {
              name: "shikimori",
              url: "https://shikimori.io/knighto/list/anime?mylist=planned&order=ranked",
              icon: "shikimori",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);

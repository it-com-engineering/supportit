module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "it.com Support", // Site title.
  siteTitleAlt: "Get Help with the IT-Service product suite", // Alternative site title for SEO.
  siteLogo: "/logos/it-pixels-white.svg", // Logo used for SEO and manifest.
  siteUrl: "http://support.it.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Get Help with the IT-Service product suite", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82450300-1 ", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userLocation: "Washington, DC", // User location to display in the author segment.
  userDescription: "All about me!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:info@it.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Home",
      url: "http://it.com",
      iconClassName: "fa fa-home"
    }
  ],
  copyright: "Copyright © 2018 it.com", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#00A6DC", // Used for setting manifest and progress theme colors.
  backgroundColor: "#00A6DC", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};

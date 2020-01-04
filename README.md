# MetaPresenter.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/771bf805-4196-47d8-9da1-9017d800c403/deploy-status)](https://app.netlify.com/sites/metapresenter/deploys)

[Website](https://metapresenter.com) for the [Ruby gem meta_presenter](https://github.com/szTheory/meta_presenter). Built with Middleman for SSG, Webpack for asset build, deployed to Netlify, using DatoCMS for content. MIT license.

![screenshot-mobile-metapresentercom](https://user-images.githubusercontent.com/28652/50569999-16a08080-0d46-11e9-9e6a-7c89003b6e33.jpeg)

## Development Instructions

1. Clone the git repository then `cd` into the project directory

2. Start the Middleman server from the command line \$ `middleman server`

3. Navigate to http://localhost:4567 in your browser

## TODO (Important)

- Add parallax effects
- Hover states on buttons
- Read current version number in the footer from the Rubygems repo using their API
- Rails and Github logos are getting distorted
- Align the mobile menu with the Invision mockup
- Spell check site
- Test in different browsers, on mobile too (IE, FF, Chrome, Safari)
- Move all remaining hardcoded copy to DatoCMS

## TODO (Nice to have)

- Use the new CSS image set attribute to only load mobile assets on mobile version (reduce load time)
- Add explanatory paragraphs next to each step on instructions section
- Instructions section two-column styling for lg/xl screens
- Point the "Learn More" anchors from the instructions section to relevant parts of /readme
- Add simple full-text search to README with LunrJS

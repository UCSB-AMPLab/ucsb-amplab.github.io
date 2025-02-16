# Made by JekyllThemes.io – Instructions

If you have any questions or feedback about the theme, don't hesitate to reach out to hello@jekyllthemes.io for 1-to-1 support direct from the developers.

---

## Getting started

Copy the theme files to your website directory.

To run the theme locally, navigate to the theme directory in your terminal and run `bundle install` to install the theme's dependencies. Then run `jekyll serve` to start the Jekyll server.

---

## Jekyll basics

If you're not familiar with how Jekyll works, check out [jekyllrb.com](https://jekyllrb.com/) for all the details, 
or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/), and [creating pages](https://jekyllrb.com/docs/pages/).

---

## Customizing the theme

Made comes packed with lots of options to let you customize the theme.

---

### The `_config.yml` file

The main things you might need to change here are:

`site: Made Jekyll Theme` – change this to your website's name

`url:` – the full URL that your site will be hosted at, e.g. https://your-domain.com

`baseurl:` – add a base URL here if you will be publishing the site inside a folder, e.g. https://your-domain.com/project/ – or if you're hosting it as a 'project page' on GitHub Pages. Example: `baseurl: /project`

When using baseurl, you should reference images in your post/project Frontmatter **without** the baseurl, e.g. `/images/image.jpg` but images inside the Markdown content **should include** the baseurl snippet, e.g. `{{site.baseurl}}/images/image.jpg`

`paginate: 6` – change this to set the number of blog posts on each page

You can also change more advanced things here like the path names, collections etc. You do not need to change any of these to achieve the same look as the demo, so best to leave everything else unless you are confident.

---

### The `settings.yml` file

You'll find this inside the `_data` folder – this is where you can set all of the theme options.

**Basic settings**

`site_title` – change this to your website's title. This shows up in the browser's title bar, and in the header and footer.
`favicon_image` – change this to the location of your favicon image, which shows up in the browser's title bar.

**Header settings**

`logo_image` – if you'd like to use a logo instead of plain text title in your header, enter the link to it here.
`logo_width` – set the width (in pixels) that your logo should appear at. This is useful for adding retina display support – for example if your original image is 400px wide, you could set this value to `200` to display a retina-ready image.

**Menu settings**

This allows you to set the links inside your menu. Add each one as a list item with a `title` and `url`. When hosting on GitHub Pages, make sure you leave a trailing `/` at the end of links to category pages (e.g. `/blog/` or `/projects/`).

**Footer settings**
`logo_image` – if you'd like to use a logo instead of plain text title in your footer, enter the link to it here.
`logo_width` – set the width (in pixels) that your logo should appear at. This is useful for adding retina display support – for example if your original image is 400px wide, you could set this value to `200` to display a retina-ready image.
`footer_tagline` – sets the text that dispays underneath the site title/logo in the footer.

**Hero settings**

`background_image` – this option lets you choose the background image for the home page hero section.

**Post settings**

`grid_spacing` – this sets the amount of spacing (in pixels) between each image in an image grid layout.

**Contact settings**

The theme comes with a pre-made contact form that you can use with [Formspree](https://formspree.io/create/jekyllthemes), which is free for up to 50 submissions per month. They also have two great paid plans that offer advanced features. Use the link above to set up your account and then paste the 'endpoint' integration code into the theme settings:

`form_action` – this is the form endpoint attribute that you get from FormSpree, for example `https://formspree.io/abcdefgh`
`confirmation_url` – by default the user is shown a default Formspree thank you page. If you have a premium plan, you can use this setting to provide an alternative URL for that page, for example `/thanks` – we have included a basic thank you page with the theme.
`email_subject` – choose the subject of the email you receive from Formspree.
`send_button_text` – change the text used on the form submit button.

**Social settings**

Here you can add links to your profiles on social networks, and they'll be shown in the 'about' section. Simply add your URL next to the ones you want to show.

**Color settings**

Here you can set all the different colors used by the theme. Try them out and find the color pallette that works for you!

**Font settings**

`font_embed` – add an embed code from an external font service. This allows you to use services like Google Fonts or Typekit.
`title_font` – set the CSS name for the font used on titles.
`body_font` – set the CSS anme for the font used for body text.
`regular_weight` – set the font weight for regular styled text.
`bold_weight` – set the font weight for bold styled text.

Below these options, you'll see options for each typographical element used in the theme. For each, you can set the following options:

`small_size` – the size (in pixels) used for this element on small size screens like mobile phones.
`medium_size` – the size (in pixels) used for this element on medium size screens like tablets.
`large_size` – the size (in pixels) used for this element on largers screens like laptops and desktops.
`weight` – the font weight for this element.
`letter_spacing` – the letter spacing (in ems) for this element.
`line_height` – the line-height (in decimals) for this element.

**Advanced options**

`ajax_loading` – use `true` to enable Ajax loading throughout your site. Use `false` to disable it and load pages normally – this can be helpful if you're adding plugins or other javascript to your pages.
`analytics_code` – use this option to add your Google Analytics code.
`custom_styles` – use this option to add custom CSS styles to the theme.
`header_js` – use this option to insert javascript into the header of the page.
`footer_js` – use this option to insert javascript at the end of the page.

---

### Images

Inside the `/images/` folder you'll find a few images included with the theme.

The images in the `/demo/` subfolder are used in the demo project, post and page – you delete those if you don't need them.

`favicon.png` – you should replace this with the favicon image you'd like to use for your website.

`social.jpg` – this image is used by default as the meta image on the Home and Blog pages. This shows up on social shares of your page, for example Facebook or Twitter – so you should change it to a relevant image, or change the image URL in that page's Front Matter (see below).

---

## Main pages

The theme comes with some pages set up ready for your content.

### The home page – `/index.html`

This is your website home page. You can edit some details in the Front Matter at the top of the page:
`overtitle` – this sets the small intro text above the main page title.
`title` – this sets the main page title, which also shows up in the browser's title bar and on search engine results, social shares etc.
`description` – this sets the intro text that displays next to the main page title, and also the page meta description, which shows up on search engine results, social shares etc.
`featured_image` – this sets the meta image for the page, which shows up on social shares.

Below the Front Matter is the code for the page. You should edit this to set your title and intro text. Hint - the main <h1> tag respects line breaks on tablet size screens and larger. This is useful if you want to prevent typographic widows.

### The blog page – `/blog/index.html`

This is the blog listing page, which shows all your blog posts. You can edit the same things as on the home page to customise it for your website.

---

## Projects, posts and pages

These control the main content of your website, and are found inside the `_projects`, `_posts` and `_pages` folders.

Take a look at the demo content inside each folder for full descriptions on what you can do inside these, and to use as a template for your own content.

---

## Any questions?

If you have any questions or feedback about the theme, don't hesitate to reach out to hello@jekyllthemes.io for 1-to-1 support direct from the developers!

🤘

---

This page is a demo that shows everything you can do inside portfolio and blog posts.

We've included everything you need to create engaging posts about your work, and show off your case studies in a beautiful way.

![](/images/demo.jpg)

**Obviously,** we’ve styled up *all the basic* text formatting options [available in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

You can also add blockquotes, which are shown at a larger width to help break up the layout and draw attention to key parts of your content:

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”

The theme also supports markdown tables:

| Item                 | Author        | Supports tables? | Price |
|----------------------|---------------|------------------|-------|
| Duet Jekyll Theme    | Jekyll Themes | Yes              | $49   |
| Index Jekyll Theme   | Jekyll Themes | Yes              | $49   |
| Journal Jekyll Theme | Jekyll Themes | Yes              | $49   |

And footnotes[^1], which link to explanations[^2] at the bottom of the page[^3].

[^1]: Beautiful modern, minimal theme design.
[^2]: Powerful features to show off your work.
[^3]: Maintained and supported by the theme developer.

You can throw in some horizontal rules too:

---

#### Image galleries

Here's a really neat custom feature we added – galleries:

{% include post-components/gallery.html
	columns = 2
	full_width = true
	images = "/images/demo.jpg,/images/demo.jpg,/images/demo.jpg,/images/demo.jpg,
	"
%}

Inspired by the Galleries feature from WordPress, we've made it easy to create grid layouts for your images. Just use a simple Liquid snippet in your post to create a masonry grid image layout:

{% raw %}
```liquid
{% include post-components/gallery.html
	columns = 2
	full_width = true
	images = "/images/demo.jpg,/images/demo.jpg,/images/demo.jpg,/images/demo.jpg,
	"
%}
```
{% endraw %}

*See what we did there? Code and syntax highlighting is built-in too!*

Change the number inside the 'columns' setting to create different types of gallery for all kinds of purposes. You can even click on each image to seamlessly enlarge it on the page.


#### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

{% include post-components/gallery.html
	columns = 1
	full_width = true
	images = "/images/demo.jpg,/images/demo.jpg,/images/demo.jpg
	"
%}

#### What about videos?

Videos are an awesome way to show off your work in a more engaging and personal way, and we’ve made sure they work great on our themes. Just paste an embed code from YouTube or Vimeo, and the theme makes sure it displays perfectly:

{% include post-components/video.html
	url = "https://player.vimeo.com/video/270725085?color=6c6e95&title=0&byline=0"
	full_width = true
%}

### Pretty cool, huh?

We've packed this theme with powerful features to show off your work.
Why not put them to use on your new website?

<a href="https://jekyllthemes.io/theme/made-portfolio-jekyll-theme" class="button--fill">Get This Theme</a>
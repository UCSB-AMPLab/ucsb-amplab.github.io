# Toggle Component Documentation

The toggle component allows you to create expandable/collapsible content sections on your Jekyll website. Users can click a button to reveal or hide additional content.

## Basic Usage

```liquid
{% include component__toggle.html 
  id="unique-identifier"
  content="Your expandable content here" %}
```

## Full Parameters

```liquid
{% include component__toggle.html 
  id="unique-identifier"
  button_text="Show more"
  expanded_text="Show less"
  content="Your expandable content here" %}
```

## Parameters Explained

- **`id`** (required): A unique identifier for the toggle. Must be unique across the page.
- **`button_text`** (optional): Text shown on the button when content is collapsed. Default: "Show more"
- **`expanded_text`** (optional): Text shown on the button when content is expanded. Default: "Show less"
- **`content`** (required): The HTML content that will be toggled. Can include any HTML, markdown, or other Liquid includes.

## Examples

### Simple Toggle
```liquid
{% include component__toggle.html 
  id="simple-example"
  content="This is additional information that will be hidden by default and shown when the user clicks the button." %}
```

### Custom Button Text
```liquid
{% include component__toggle.html 
  id="custom-text"
  button_text="Read full article"
  expanded_text="Collapse article"
  content="Your full article content here..." %}
```

### With HTML Content
```liquid
{% include component__toggle.html 
  id="html-content"
  button_text="View gallery"
  content="
    <div class='gallery'>
      <img src='/images/photo1.jpg' alt='Photo 1'>
      <img src='/images/photo2.jpg' alt='Photo 2'>
      <img src='/images/photo3.jpg' alt='Photo 3'>
    </div>
  " %}
```

### With Other Includes
```liquid
{% include component__toggle.html 
  id="nested-include"
  button_text="Show contact form"
  content="
    {% include component__contact.html %}
  " %}
```

### With Markdown
```liquid
{% include component__toggle.html 
  id="markdown-content"
  button_text="View full description"
  content="
    ## Detailed Description
    
    This is a **markdown** section with:
    
    - Bullet points
    - *Italic text*
    - [Links](https://example.com)
    
    > Blockquotes work too!
  " %}
```

## Styling

The component uses your existing button styles and extends them with toggle-specific classes:

- `.toggle-component`: Main container
- `.toggle-content`: The expandable content area
- `.toggle-button`: The toggle button (extends `.button--text`)

## Accessibility

The component includes proper ARIA attributes:
- `aria-expanded`: Indicates the current state
- `aria-controls`: Links the button to the content it controls

## JavaScript Functionality

The toggle functionality is handled by jQuery and includes:
- Smooth animations
- State management
- Button text updates
- Keyboard accessibility

## Customization

You can customize the appearance by modifying the SCSS file:
`_sass/_includes/_component__toggle.scss`

Key customization points:
- Animation duration and easing
- Button colors and hover effects
- Content transition effects
- Responsive breakpoints

## Best Practices

1. **Unique IDs**: Always use unique identifiers for each toggle on a page
2. **Meaningful Text**: Use descriptive button text that tells users what they'll see
3. **Content Length**: Consider whether content is appropriate for toggling (very short content might not need it)
4. **Performance**: The component is lightweight and won't impact page performance
5. **Mobile Friendly**: Works well on all device sizes

## Troubleshooting

- **Content not showing**: Check that the `id` parameter is unique and properly formatted
- **Button not working**: Ensure jQuery is loaded and the JavaScript file is included
- **Styling issues**: Verify that the SCSS file is imported in your main stylesheet

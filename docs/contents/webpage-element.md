# WebPage Element Content Type

The WebPage content type is a fundamental component of structured data markup used to describe a webpage's content in a machine-readable format. By implementing WebPage schema.org markup, you enhance the visibility and understanding of your webpage's content by search engines, which can lead to improved search engine rankings and richer search results.

## Site Navigation Element

Create a site navigation element.

[Schema.org SiteNavigationElement documentation](https://schema.org/SiteNavigationElement)

```markdown
---
elementType: SiteNavigationElement
identifier: navbar
inLanguage: en
itemListElement:
  - name: Home
    path: /
  - name: Website Section
    path: /en/section/
---
```

## Website Footer

[Schema.org WPFooter documentation](https://schema.org/WPFooter)

```markdown
---
elementType: WPFooter
identifier: footer
inLanguage: en
itemListElement:
  - name: Home
    path: /en/
  - name: Website Section
    path: /en/section/
---

More Footer description.
```

# InsightHeader

Insights article header: breadcrumb, topic chip, title and byline on the calm left of a dot texture (Imagery asset group, `insight-<name>-<1|2|3>.webp`, 1600 × 600). Each combination comes in three colourways: 1 warm (blush, apricot), 2 cool (sage, periwinkle), 3 lavender; pick the colourway that suits the article's main topic and vary the texture between neighbouring articles.

Markup: `header.xd-insight-header > img[alt=""]`, `.xd-insight-header__crumb`, a chip, `h1.xd-insight-header__title`, `.xd-byline`. Reading time is calculated at build time from word count, never typed in.

---
aliases:
  - How to use hookmark in zotero 7
up:
  - "[[조테로 (Zotero)|Zotero]]"
tags:
  - zotero
  - post/medium
date_created: 2024-08-21
post:
  - https://beromkoh.medium.com/how-to-use-hookmark-in-zotero-7-8c863d3dca9f
publish: true
---

I’m currently using [[조테로 (Zotero)|Zotero]] for my research, [[조테로 (Zotero)|Zotero]] is free and easy to use.
This week, I upgraded to Zotero 7 beta because it has a better design than the previous version. However, when I launched the new Zotero and tried to use Hookmark to connect the Obsidian vault with Zotero, Hookmark was not working.

Today, I will share how I solved this problem

## Zotxt Extension

Go to the [zotxt GitHub page](https://github.com/egh/zotxt). Download Zotxt suitable for your version of Zotero. Install zotxt by following the instructions on the its GitHub page.

Zotxt is a Zotero extension for supporting utilities that deal with plain text files (e.g., markdown, reStructuredText, latex, etc.) This plugin will be used for [[Hookmark]] required text to make hookmark link

## Zotero-markdown-translator

Go to the [silentdot/zotero-markdown-translator GitHub page](https://github.com/silentdot/zotero-markdown-translator?tab=readme-ov-file). download the Zotero translator from the repository. Then install the translator by following the instructions provided on the Github page. 

The Zotero Markdown Translator plugin creates Markdown links when exporting. To solve my problem, I needed to change the Item Format to `Markdown Item URI`


- Go to the **Export** tab.
- Set the **Item Format** to `Markdown Item URI`.
- This ensures that your exported items are in the correct format for Markdown.
## Conclusion
![[Zotero 7 hookmark 동작 안하는 것 해결 방법-1724273611306.jpeg]]
Finally, reboot Zotero and check if the problem is solved. If you need further information,The latest discussions around Zotero 7 beta and its compatibility with Hookmark can be found [here](https://github.com/egh/zotxt/issues/37). It includes updates on potential issues and fixes related to Hookmark.

# SUSE Jeopardy

![Screenshot](https://cloud.githubusercontent.com/assets/582520/24906267/574a9776-1eb7-11e7-9f06-8f892e2a75dc.png)

This is a funny quiz around SUSE. We support a german and an english version currently.
The questions are defined in `jeopardy-data-*.json`, the answers can be defined inline, or as
separate html files (in the `answers/` folder).

Give it a try: [German](https://digitaltom.github.io/web-jeopardy/) -
[English](https://digitaltom.github.io/web-jeopardy/?file=jeopardy-data-en.json) version

Or run locally with: `ruby -run -e httpd -- . -p 8000`

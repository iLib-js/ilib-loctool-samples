# ilib-loctool-samples

This project contains sample projects of various types
that can each be localized with the ilib loctool. Use these as
the basis to start your own project. You can also try running
`loctool init` to create a small starter project.json file to get
your localization project off the ground.

## Trying Them Out

Each subdirectory is a project that contains a `package.json`
file which depends on the loctool plus whatever plugins are
necessary to localize that project. The scripts in that
`package.json` all have the same targets:

- loc - run the localization tool on this project
- debug - run the localization tool on this project with the
chrome debugging tools. Open `chrome://inspect/#devices` in
chrome and click on "Open dedicated DevTools for Node" to watch
the localization tool running in the debugger.
- clean - clean up the localization results so that you can
run it all again.

For each subdirectory, run the loctool with:

```
> npm install
> npm run loc
```

Then view the results. The output goes into different directories,
depending on how the type of the project.

## Sample Translations

Each subdirectory contains an "xliffs" directory that contains the
translations for that project. The translations are usually partial
translations so that you can see what happens to things that are
not translated. For projects where the source file is copied and
translated, such as HTML or markdown, the untranslated strings usually
appear in the translated file written in the source language English.
For projects which use resource files, the untranslated strings
are usually left out. For both types of projects, the new strings
will appear in a `[projectname]-new-[locale].xliff` file in the root
which you can send to your translators. See the [documentation](https://github.com/ilib-js/loctool)
for the loctool for more details on how to do a localization cycle.

## What Project Types are Available?

- android - a sample Android mobile app project. The source strings
are in `res/values/strings.xml` and `res/layout/t1.xml`, and the output
goes into `res/values-[locale]/strings.xml`

- js - a sample project containing JavaScript files to translate.
The source files are in `src/*.js` and
the output goes into `resources/[locale].js`.

- js-json - a sample project containing JavaScript files to translate
and where the output is ilib-style json files.
The source files are in `src/*.js` and
the output goes into `resources/[localeDir]/strings.json`.

- markdown - a sample project containing Github-flavored markdown
files to translate. The source file is in `md/en-US/README.md` and
the output goes into `locale/[locale]/README.md`.

- po - a sample project containing po
files to translate. The source file is in `src/*.po` and
the output goes into `resources/[locale].po`.

- webos-js - a sample project containing JavaScript
files to translate. It is optimized for webOS web applications
The source files are in `src/*.js` and
the output goes into `resources/[locale]/strings.json`.

- webos-qml - a sample project containing QML
files to translate. It is optimized for webOS qml applications
The source files are in `src/*.qml` and
the output goes into `resources/[projectID]_[locale].ts`.

- webos-c - a sample project containing C files to translate.
It is optimized for webOS web applications
The source files are in `src/*.c` and
the output goes into `resources/[locale]/cstrings.json`.

- webos-cpp - a sample project containing C++ files to translate.
It is optimized for webOS web applications
The source files are in `src/*.cpp` and
the output goes into `resources/[locale]/cppstrings.json`.

- webos-appinfojson - a sample project containing appinfo.json files to translate.
It is optimized for webOS web applications
The source files are in `appinfo.json` and
the output goes into `resources/[locale]/appinfo.json`.

- salesforce - a sample project containing a sales for apex app
to translate. It contains the main translation-meta.xml as well
as a number of other meta xml files that contain the source
strings. All sources are in force-app, and the output goes
to `force-app/main/default/translations/[locale].translation-meta.xml`

- xml - a sample project containing xml files to translate. This
plugin can parse arbitrary xml files given a schema definition
in json format. (The xml is converted to json first, and then
parsed.) The source files are in `xml` and the localized
xml files go into the same directory. The sample files include
some Android xml files as well as a Java xml properties file.

## Mixing and Matching

Most projects are not homogeneous. For example, you may have a single
project that contains both your Android and your iOS app at the
same time. Or, it contains a webapp with both a front end in React
and a backend in Python, and a documentation directory full of
markdown files. With the loctool, you can create a project
that includes all the plugins at the same time to support all of
those file types. Merge the settings for each of the plugins into
one project.json and make sure the mappings are set correctly so
that you can apply the correct settings to the right files.

# License

Copyright 2021 JEDLSoft

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

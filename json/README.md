# ilib-loctool-json plugin sample

This is a sample project that demonstrates how to use the `ilib-loctool-json` plugin to extract strings from JSON files for localization.
The project contains a single JSON file with all the strings that need localization.


## Structure
- `project.json`: The main configuration file for the project that needs localization.** 
- `schema.json`: The schema file that defines the structure of the JSON file to be localized.
- `i18n/sample.json`: A JSON file containing strings that need to be localized. 

** For a detailed description of how to create the configuration file for the project, refer to the [loctool README](https://github.com/iLib-js/ilib-mono/tree/main/packages/loctool#configuration).

## Schema file
The schema file is used by the ilib-loctool-json plugin to extract strings from the JSON file.
Detailed information on how to create a schema file can be found in the [ilib-loctool-json README](https://github.com/iLib-js/ilib-mono/blob/main/packages/ilib-loctool-json/README.md#ilib-loctool-json)

It is important to note that the schema file has two custom properties:
* `isComment`: This property indicates that the string is a comment and should be used as a comment when creating a resource. The comment is then added to the `<note>` tag in the respective translation unit in the XLIFF file.
*`usePropertyKeyAsResname`: This property instructs the plugin to use the property key as the resource key when creating a resource. This results in using the key as the resname attribute in the respective translation unit in the XLIFF file.

**Example:**
```json
// schema
{
  ...
  "additionalProperties": {
    "type": "object",
    "properties": {
      ...
      "description": {
        "type": "string",
        "isComment": true
      }
    },
    "usePropertyKeyAsResname": true,
    ...
  }
}
```

```json
// JSON that needs localization
{
  "project.createWhateverModal.invalid": {
    "defaultMessage": "Invalid",
    "description": "Title for invalid"
  }
}

```

```xml
<!-- Resulting XLIFF -->
<!-- Note that the `resname` attribute is set to the key of the property -->
<!-- and the `note` tag is set to the value of the `description` property -->
<trans-unit id="3" resname="project.createWhateverModal.invalid" restype="string" datatype="json">
    <source>Invalid</source>
    <note>Title for invalid</note>
</trans-unit>

```

## JSON file structure
JSON file structure used for the sample project is as follows:
```json
{
  "key": {
    "defaultMessage": "A string that needs to be localized",
    "description": "A description of the string that will be used as a comment in the `<note>` tag inside the translation unit in the XLIFF file"
  }
}

```

## How it works
1. `loctool` reads the configuration file and identifies the JSON file that needs to be localized.
2. `loctool` extracts the strings from the JSON file using `ilib-loctool-json` plugin and saves them in an XLIFF file.

## Usage
To extract strings from the JSON file, install dependencies by running the following command from the root directory:
```bash
yarn
```

Once the dependencies are installed, run the following command to extract strings:
```bash
yarn run loc
```

After running the command, the extracted strings will be saved in the `sample-json-extracted.xliff` file and other XLIFF files saved next to it.


## Updating the project configuration
To update the project configuration, modify the `project.json` file as needed.
Ensure that any changes to the configuration are consistent with the [loctool configuration guidelines](https://github.com/iLib-js/ilib-mono/tree/main/packages/loctool#configuration).

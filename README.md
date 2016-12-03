```
 ____                       _    __                      _
/ ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
\___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
|____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
-----------------------------------------------------------------
```

A “Hello World” [Smartface](https://www.smartface.io) workspace, using modern JavaScript.

## About

This is a fork of <https://github.com/smartface/smfc-empty-workspace> to add ES6/7+ support and (*possibly*) a hint of React.

This is currently an **experimental** repository. Use it at your own risk.

## Installation

Make sure you’ve cloned this repository in the [**Smartface Cloud IDE**](https://cloud.smartface.io/Home/Index).

Once you are inside the **Smartface Cloud IDE**, update the linux packages and also install a recent version of the Node.JS runtime as follows:

```
sudo apt-get update
nvm install v7.2.0
```

Then verify your Node.JS version:

```
node --version
v7.2.0
```

After that install required modules:

```
npm install
```

## Dependencies

As stated above, you need to clone this repository in the **Smartface Cloud IDE**. You will also need to do an `npm install` (*see the section above*). Other than those, everything else is handled by the Smartface runtime.

## Before Running the App in Your Device

Make sure that your code is in good shape by running the linter:

```
npm run lint
```

When you don’t see anything in the output, it means that your code is in good shape.

Remember: No news is good news.

If you, however, see a warning like the following, then you probably will need to fix it:

```
 9:36  error  Parsing error: Unexpected token, expected ,

   7 | import tr from 'languages/tr';
   8 |
>  9 | const lang = i18n(  de, fi, en, tr ] );
     |                                    ^
  10 |
  11 | export default lang;
  12 |

✖ 1 problem (1 error, 0 warnings)
```

Linter warning are most of the time self-descriptive, and helpful. In the above case for instance, we have forgotten to add an `[` to the variable definition on line 9; — it should have been `const lang = i18n( [ de, fi, en, tr ] );` instead (node the extra `[` after the `( ` );

After you fix all the warning now you can build your JavaScript:

```
npm run build
```

When the above command finishes successfully; your repository is ready to be run on the device.

## Important Files and Folders

* **src**: The application source code.
* **scripts**: Transpiled source goes there; the files in this folder is autogenerated.
* **resources**: Contains localization resources.
* **bin**: Binaries that are used by the NPM scripts.
* **./package.json**: The package definition.
* **CHANGELOG.md**: A log of what has been done since the last version.
* **README.md**: This very file.

## Package Scripts

// TODO: TBD.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code fork this repository and create a pull request

In lieu of a formal styleguide, take care to maintain the existing coding style. 

Also don’t forget to add unit tests for any new or changed functionality.

If you want to report a bug; or share a comment or suggestion, [file an issue](https://github.com/v0lkan/smartface-empty-workspace-jsnext/issues/new).

## Supported Environments

This demo application crates binaries for the recent versions of iOS and Android devices.

## I’ve Found a Bug, I Have an Idea

[Please file an issue and lest us know too](https://github.com/v0lkan/smartface-empty-workspace-jsnext/issues/new).

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)

## Code of Conduct

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

[See the code of conduct for details](CODE_OF_CONDUCT.md).

## From the [Smartface](https://www.smartface.io) Team

### Hello Fellow Developer

Thank you for using Smartface Cloud!

Developing native apps for iOS and Android is as easy as a few lines of JavaScript code.

Start coding right away and to view your app instantly on a real device, just click the Run on Device button and follow the instructions.

You can also update your native apps remotely and manage their lifecycle end-to-end, fully in the cloud.

Welcome to the world of mobility!

Smartface Team.

### Support, Documentation, and Useful Links

* [Guides](https://www.smartface.io/guides)
* [API Docs](https://docs.smartface.io)
* [Smartface Cloud Dashboard](https://cloud.smartface.io)
* [Download Smartface On-Device Emulator](https://smf.to/app) (Works only from your device)

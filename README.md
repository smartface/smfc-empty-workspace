
     ____                       _    __                      _
    / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
    \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
     ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
    |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
    -----------------------------------------------------------------

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

## Usage

// TODO: complete this section.

## Wanna Help?

// TODO: complete this section.

## Supported Environments

// TODO: complete this section.

## I’ve Found a Bug, I Have an Idea

// TODO: complete this section.

## Contact Information

// TODO: complete this section.

## Code of Conduct

// TODO: complete this section.

## From the [Smartface](https://www.smartface.io) Team

Hey fellow developer, thank you for using Smartface Cloud!

Developing native apps for iOS and Android is as easy as a few lines of JavaScript code.

Start coding right away and to view your app instantly on a real device, just click the Run on Device button and follow the instructions.

You can also update your native apps remotely and manage their lifecycle end-to-end, fully in the cloud.

Welcome to the world of mobility!

Smartface Team.

## Support, Documentation, and Useful Links

* [Guides](https://www.smartface.io/guides)
* [API Docs](https://docs.smartface.io)
* [Smartface Cloud Dashboard](https://cloud.smartface.io)
* [Download Smartface On-Device Emulator](https://smf.to/app) (Works only from your device)
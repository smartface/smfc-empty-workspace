```
 ____                       _    __                      _
/ ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
\___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
|____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
-----------------------------------------------------------------
```

## smartface-empty-workspace v0.5.0

* Synchronized versions of all `@volkan/smartface-*` repositories to `v.0.5.0`.
* Added CI and unit test support.
* Cleaned-up `.gitignore`.

## smartface-empty-workspace v0.3.3

* Linter fixes and minor changes.

## smartface-empty-workspace v0.3.0

* Synchronized versions of all `@volkan/smartface-*` repositories to `v.0.3.0`.
* Updated the [README](README.md).
* Added some exra helper scripts.

## smartface-empty-workspace v0.1.2

* Initial version.
* The application can now use modern JavaScript (es2016/es2017+) and React (round of applause please!).
* Reduced the code by factoring out and moving dependencies to their own repositories:
    * `@volkan/smartface-component-application`: The `Application` Façade.
    * `@volkan/smartface-core-device`: The glue to the `React` ecosystem.
    * Note to self: I’ll kindly request <smartface.io> team to create these repositories under their organization once the code is stabilized.
* Next up:
    * Creating some documentation on this and also on the dependent repositories.
    * Adding a really minimal unit test and integrating it with Travis (or some other CI system
/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

const Pages = global.Pages;
const SMF = global.SMF;

const Page = ( props ) => {
    const name = props.key;

    Pages[ name ] = new SMF.UI.Page( { name, ...props } );;

    const children = props.children;

    return <div>{children}</div>;
};

export default Page;

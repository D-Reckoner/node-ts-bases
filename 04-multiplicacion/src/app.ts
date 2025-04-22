import { yarg } from "./config/plugins/args.plugins";

// console.log(yarg.b);

(async() => {
    await main();
})();

async function main() {
    console.log(yarg);
}
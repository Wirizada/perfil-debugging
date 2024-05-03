import { getBaseEmail } from "./services/email";

async function main() {
    console.log(await getBaseEmail("João"));

    console.log("Finalizada");
    console.log("...");
}

main();
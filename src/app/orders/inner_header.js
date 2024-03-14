import { Button } from "@/components/Buttons";
import { H1 } from "@/components/Headings";
import Link from "next/link";

function InnerHeader({title}) {
    return (
        <>
            <Link href="/orders">
                <Button>
                    Отменить
                </Button>
            </Link>
            <H1>{title}</H1>
        </>
    )
}
export { InnerHeader };
import { Flex } from "antd"
import { ComponentCard } from "../components/card/Card"

export const HomePage = () => {
    return (
        <>
            <Flex gap="middle" vertical={false}>
                <ComponentCard />
                <ComponentCard />
                <ComponentCard />
                <ComponentCard />
                <ComponentCard />
            </Flex>
        </>
    )
}
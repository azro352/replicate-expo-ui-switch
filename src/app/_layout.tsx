import {SafeAreaView} from "react-native-safe-area-context";
import {Column, Host, Row, Spacer, Switch, Text} from "@expo/ui";

export default function Layout() {
    return (
        <SafeAreaView
            style={{
                height: "100%",
                backgroundColor: "#fff",
                paddingTop: 4,
            }}
        >
            <Host style={{flex: 1, marginTop: 100}}>

                <Column spacing={64}>

                    <Row>
                        <Column style={{backgroundColor: "red"}}>
                            <Text>no switch</Text>
                        </Column>

                        <Spacer flexible/>

                        <Column style={{backgroundColor: "blue"}}>
                            <Row>
                                <Text>{"some text"}</Text>
                            </Row>
                        </Column>
                    </Row>

                    <Row>
                        <Column style={{backgroundColor: "red"}}>
                            <Text>switch without label</Text>
                        </Column>

                        <Spacer flexible/>

                        <Column style={{backgroundColor: "blue"}}>
                            <Row>
                                <Switch
                                    onValueChange={(choice) => null}
                                    value={true}
                                />
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column style={{backgroundColor: "red"}}>
                            <Text>switch with label</Text>
                        </Column>

                        <Spacer flexible/>

                        <Column style={{backgroundColor: "blue"}}>
                            <Row>
                                <Switch
                                    label={"label"}
                                    onValueChange={(choice) => null}
                                    value={true}
                                />
                            </Row>
                        </Column>
                    </Row>

                </Column>
            </Host>
        </SafeAreaView>
    );
}

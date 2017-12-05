import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object, select, number } from "@storybook/addon-knobs";
import { TableList, Panel, Row, Column, Button } from "../../src/index";

const stories = storiesOf("Table", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let type = select("type", { table: "Table", list: "List" }, "table");
    let respondsAt = number("Change to list at:", 600);
    let items = object("items", [
        {
            name: "Blackbeard",
            role: "Captain",
            service_years: 25
        },
        {
            name: "Mysterious Bob",
            role: null,
            service_years: 100
        },
        {
            name: "Young Jim",
            role: "Deck hand",
            service_years: 3
        }
    ]);
    return (
        <Panel>
            <Row>
                <Column>
                    <h1>Priate Ship Team Listing</h1>
                    <TableList type={type} respondsAt={respondsAt}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>Role</th>
                                    <th>Year in Service</th>
                                    <th>Walk the plank?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.role}</td>
                                            <td>{item.service_years}</td>
                                            <td>
                                                <Button
                                                    onClick={() => {
                                                        alert(
                                                            `${
                                                                item.name
                                                            } should walk the plank`
                                                        );
                                                    }}
                                                >
                                                    Yar me harties!
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </TableList>
                </Column>
            </Row>
        </Panel>
    );
});

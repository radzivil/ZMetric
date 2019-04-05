import React from 'react';
import {Table} from 'semantic-ui-react'

export function LeadAndCycleTimeTable(props) {
    return (
        <div>
            <h2>ZMetric</h2>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>AverageLeadTime</Table.HeaderCell>
                        <Table.HeaderCell>AverageCycleTime</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.data.map((currentValue) =>
                            <Table.Row key={currentValue.date}>
                                <Table.Cell>{currentValue.date}</Table.Cell>
                                <Table.Cell>{currentValue.averageLeadTime}</Table.Cell>
                                <Table.Cell>{currentValue.averageCycleTime}</Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

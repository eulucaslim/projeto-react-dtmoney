import { Summary } from "../Summary";
import { Container } from "../Dashboard/styles";
import { TransactionTable } from "../TransactionsTable";

export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TransactionTable/>
        </Container>
    );
}
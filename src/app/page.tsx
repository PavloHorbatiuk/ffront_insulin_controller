import { Person } from '../../interfaces/interface';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { Container } from "@mui/material";
import { PersonsComponents } from '../../components';




export const getStaticProps = async () => {
  const url = process.env.NEXT_PUBLIC_DOMAIN + '/persons'
  const { data: persons } = await axios.get<Person[]>(url);
  return persons
}

export async function Home() {
  const persons = await getStaticProps();

  return (
    <main>
      <Container>
        <PersonsComponents persons={persons} />
      </Container>
    </main>
  );
}

export default withLayout(Home);
import TicketView from "../../../components/TicketView";

type Props = {
  params: { id: string };
};

export default function TicketPage({ params }: Props) {
  return <TicketView id={params.id} />;
}


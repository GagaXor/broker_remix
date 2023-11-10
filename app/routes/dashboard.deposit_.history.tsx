import { Table, Spinner } from 'flowbite-react';
import { LoaderFunction } from '@remix-run/node';
import { getDepositListItems } from '~/models/deposit.server';
import { requireUserId } from '~/session.server';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { HiCheck, HiX } from 'react-icons/hi';

export const loader: LoaderFunction = async ({request}) => {
  const userId = await requireUserId(request)
  const deposits = await getDepositListItems({userId});
  return json(deposits)
}

export default function StripedRows() {
  const data = useLoaderData();

  console.log(data)
  return (<div className='grid grid-cols-1'>
    <h1 className='text-white text-3xl justify-self-center mb-4'>Deposit History</h1>
    <Table striped>
      <Table.Head>
        <Table.HeadCell>
          ID
        </Table.HeadCell>
        <Table.HeadCell>
          Payment Method
        </Table.HeadCell>
        <Table.HeadCell>
          Date/Time
        </Table.HeadCell>
        <Table.HeadCell>
          Amount
        </Table.HeadCell>
        <Table.HeadCell>         
            Status          
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((item: any) => {
          return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.id}
          </Table.Cell>
          <Table.Cell>
            {item.paymentMethod === "btc" ? "Bitcoin" :
            item.paymentMethod === "eth" ? "Ethereum" :
            item.paymentMethod === "usdt" ? "USDT" : 
            item.paymentMethod ==="btCash" ? "Bitcoin Cash" : ""}
          </Table.Cell>
          <Table.Cell>
            {item.createdAt}
          </Table.Cell>
          <Table.Cell>
            ${item.amount}
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>{item.status}</p>
            </a>
            {item.status === 'Pending' ? (<Spinner/>) : 
            item.status === "Confirmed" ? (<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>) : 
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>}
          </Table.Cell>
        </Table.Row>
        })}
      </Table.Body>
    </Table>
    </div>
  )
}



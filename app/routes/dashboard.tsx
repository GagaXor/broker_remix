import FlowbiteContext from "~/context/FlowbiteContext";
import Header from "~/components/header";
import { SidebarProvider } from "~/context/SidebarContext";
import Sidebar from "~/components/sidebar";
import type { LoaderArgs } from "@remix-run/node";
import {  Outlet,  } from "@remix-run/react";
import { requireUserId } from "~/session.server";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { TickerTape } from "react-ts-tradingview-widget";


export const loader = async ({ request }: LoaderArgs) => {
    const userId = await requireUserId(request);
    return  null; //json({ noteListItems });
};
 

export default function Dashboard(): JSX.Element {
  return (
    <div>
    <SidebarProvider>
        <FlowbiteContext>
            <Header/>
            <TickerTape/>
            <div className="flex dark:bg-gray-900">
                <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
                    <Outlet/>
                </main>
                <div className="order-1">
                    <ActualSidebar />
                </div>
            </div>
        </FlowbiteContext>
      </SidebarProvider>
    </div>
  );
}


function ActualSidebar(): JSX.Element {
    return (
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            
            <Sidebar.Collapse icon={HiArrowSmRight} label="Deposit">
              <Sidebar.Item href="/dashboard/deposit" icon={HiViewBoards}>
                Deposit Funds
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/deposit/history" icon={HiViewBoards}>
                Deposit History
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiUser} label="Investment">
              <Sidebar.Item href="/dashboard/plans" icon={HiInbox}>
                Plans
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/investment/history" icon={HiUser}>
                Investment History
              </Sidebar.Item>
            </Sidebar.Collapse>
            
            <Sidebar.Item href="/dashboard/profile" icon={HiShoppingBag}>
              My Profile
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiArrowSmRight} label="Withdraw">
              <Sidebar.Item href="/dashboard/withdraw" icon={HiArrowSmRight}>
                Withdraw History
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/withdraw/history" icon={HiArrowSmRight}>
                Withdrawal History
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="/dashboard/support" icon={HiTable}>
              Help/Support
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    );
  }

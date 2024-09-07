import HeaderBox from "@/components/headerBox";
import RightSideBar from "@/components/rightSideBar";
import TotalBalanceBox from "@/components/totalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Saurav", lastName: "Bhooriya", email: "saurav@bhooriya",  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your Bank Accounts and Transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.34}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{currentBalance: 1234.34},
          {currentBalance: 5554.34}]} 
      />
    </section>
  );
};

export default Home;

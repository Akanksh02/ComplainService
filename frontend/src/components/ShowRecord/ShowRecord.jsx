import Header from "../Common/Header";
import Record from "../Common/Record";
import { Icon } from "@iconify/react";
import Button from "../Common/Button";
import styles from "../Common/Dashboard.module.scss";
import { show } from "../../Service/ExpenseService";
import { useEffect, useState } from "react";
import { WiMoonAltWaningGibbous4 } from "react-icons/wi";

const ShowRecord = () => {
  const [allExpense, setAllExpense] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await show();

    setAllExpense(res.message);
    // console.log(res.message)
  };

  return (
    <main>
      <Header
        message="Show All Complains"
        ficon={<Icon icon="fontisto:eye" />}
      />

      <div className={styles.box}>
        {allExpense.length === 0 ? (
          <Record />
        ) : (
          allExpense.length !== 0 &&
          allExpense.map((t, key) => {
            return (
              <div className="m-3" name={key}>
                <Record
                  income={t.amount}
                  content={t.ComplainDetails}
                  eid={t.eid}
                  date={t.date}
                />
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default ShowRecord;

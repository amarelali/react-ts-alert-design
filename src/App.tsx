import "./App.css";
import { Alert } from "./components/ui/Alert/Alert";
import { Ban, BellRing, Info, CheckCheck, AlertTriangle } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        title="Upgrade your plan"
        type="alert-default"
        icon={<BellRing size={20} />}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum
          quam eum quos laboriosam impedit quia, <a href="/">quibusdam</a>
          fugit, dolores consequuntur ipsam tempore vel architecto corrupti at
          obcaecati blanditiis dicta? Necessitatibus.
        </p>
      </Alert>
      <Alert
        title="Tips & Tricks"
        type="alert-warning"
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolorum
        facilis voluptate, dolor numquam quibusdam exercitationem inventore,
        ducimus dignissimos quas eligendi temporibus. Repudiandae pariatur
        doloribus quia rem molestias ipsam earum!`}
        icon={<AlertTriangle size={20} />}
      />
      <Alert
        title="Something went wrong"
        type="alert-error"
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolorum
        facilis voluptate, dolor numquam quibusdam exercitationem inventore,
        ducimus dignissimos quas eligendi temporibus. Repudiandae pariatur
        doloribus quia rem molestias ipsam earum!`}
        icon={<Ban size={20} />}
      />
      <Alert
        title="Your order has been processed"
        type="alert-success"
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolorum
        facilis voluptate, dolor numquam quibusdam exercitationem inventore,
        ducimus dignissimos quas eligendi temporibus. Repudiandae pariatur
        doloribus quia rem molestias ipsam earum!`}
        icon={<CheckCheck size={20} />}
      />
      <Alert
        title="Note"
        type="alert-info"
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolorum
        facilis voluptate, dolor numquam quibusdam exercitationem inventore,
        ducimus dignissimos quas eligendi temporibus. Repudiandae pariatur
        doloribus quia rem molestias ipsam earum!`}
        icon={<Info size={20} />}
      />
    </>
  );
}

export default App;

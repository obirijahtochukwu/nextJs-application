// "use client";
import Image from "next/image";
import styles from "./home.module.scss";

export default function Home() {
  const btns = [
    { text: "MultiversX DeFi Wallet", logo: "/media/icons/Ellipse 25.svg" },
    { text: "MultiversX Web Wallet", logo: "/media/icons/Ellipse 25.svg" },
    { text: "Ledger", logo: "/media/icons/Ellipse 25 (1).svg" },
    { text: "xPortal App", logo: "/media/icons/Ellipse 25.svg" },
  ];

  return (
    <main
      style={{
        backgroundImage:
          "conic-gradient(from 180deg at 50.00% 50.00%, rgba(3, 8, 27, 0.30) 0deg, rgba(3, 8, 27, 0.39) 180deg), url('/media/login/background.svg')",
      }}
      className="bg-cover bg-center flex justify-center items-center bg-no-repeat w-full min-h-[100vh] py-[20vh]"
    >
      <article className={styles.loginBox}>
        <Image
          alt=""
          height={0}
          width={0}
          src={"/media/login/logo.svg"}
          className={styles.logo}
        />

        <div className={styles.title}>Welcome to xBid</div>
        <div className={styles.text}>
          Auction House dApp Login using your MultiversX wallet.
        </div>
        <div className={styles.bar}>
          <div className={`${styles.barImg}`}></div>
          <div className={`${styles.barTitle}`}>Login with</div>
          <div
            style={{ backgroundImage: "url('/media/login/Line_6.svg')" }}
            className={`${styles.barImg}`}
          />
        </div>

        <div className={styles.btns}>
          {btns.map(({ text, logo }, idx) => {
            return (
              <div key={idx} className={styles.btn}>
                <Image
                  alt=""
                  height={0}
                  width={0}
                  src={logo}
                  className={styles.btnLogo}
                />
                <div className={styles.btnText}>{text}</div>
                <Image
                  alt=""
                  height={0}
                  width={0}
                  src={"/media/icons/Line 7.svg"}
                  className={styles.btnIcon}
                />
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
}

import { Modal } from "widgets/Modal";
import {
  useNetworkModal,
  useWalletModal,
  useGetWalletState,
  useModalState,
} from "state/hooks";
import AccountInfo from "components/Account";
import WalletComponent from "components/Wallet";
import useAuth from "hooks/useAuth";
import { Flex } from "components/Box";
import Button from "components/Button";
import Networks from "config/constants/network";
import Image from "components/Image";

export const ModalLayout = () => {
  const { setWalletModalState, setNetworkModalState } = useModalState();
  const { login } = useAuth();
  let walletState = useGetWalletState();

  return (
    <>
      <Modal
        show={useWalletModal()}
        onDismiss={() => {
          setWalletModalState();
        }}
        size="lg"
        title={walletState.connected ? "Account" : "Connect Wallet"}
        centered={true}
      >
        {walletState.connected ? (
          <AccountInfo />
        ) : (
          <WalletComponent
            onClick={(url) => {
              login();
            }}
          />
        )}
      </Modal>
      <Modal
        show={useNetworkModal()}
        onDismiss={() => {
          setNetworkModalState();
        }}
        size="lg"
        title={"Switch Network"}
        centered={true}
      >
        <Flex className={"p-4 row justify-content-center"}>
          {Networks.map((network, index) => (
            <Flex className={"col-8 col-lg-4 mb-2"} key={index}>
              <Button
                icon={
                  <Image
                    src={network.selectIcon}
                    width="36.48px"
                    height="36.48px"
                    classes={"mr-2 mr-md-3"}
                  />
                }
                title={network.name}
                classes={"py-1 px-2"}
                width="inherit"
                disabled={network.disabled}
              />
            </Flex>
          ))}
        </Flex>
      </Modal>
    </>
  );
};

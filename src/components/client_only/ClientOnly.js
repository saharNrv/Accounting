import dynamic from "next/dynamic";


function ClientOnly(props) {
    const {children} = props;

    return children;
};

export default dynamic(() => Promise.resolve(ClientOnly), { ssr: false });
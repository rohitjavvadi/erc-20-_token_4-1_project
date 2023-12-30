// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import './App.css';

// import { Tsunami } from 'react-bootstrap-icons'

// import artifact from './artifacts/contracts/Crowdsale.sol/Crowdsale.json'
// const CONTRACT_ADDRESS = '0x41c5585F34219CbCa42159BA3d5D333c56A3578E'


// function App() {
//   const [provider, setProvider] = useState(undefined);
//   const [signer, setSigner] = useState(undefined);
//   const [contract, setContract] = useState(undefined);
//   const [signerAddress, setSignerAddress] = useState(undefined);
//   const [amount, setAmount] = useState(0)


//   useEffect(() => {
//       const onLoad = async () => {
//         const provider = await new ethers.providers.Web3Provider(window.ethereum)
//         // const provider = await new ethers.BrowserProvider(window.ethereum)

//         setProvider(provider)

//         const contract = await new ethers.Contract(
//           CONTRACT_ADDRESS,
//           artifact.abi,
//           provider
//         )
//         setContract(contract)
//       }
//       onLoad()
//   }, [])

//   const isConnected = () => (signer !== undefined)

//   const connect = () => {
//     getSigner(provider)
//       .then(signer => {
//         setSigner(signer)
//     })
//   }

//   const getSigner = async provider => {
//     const signer = provider.getSigner();

//     signer.getAddress()
//       .then((address) => {
//         setSignerAddress(address)
//       })

//     return signer;
//   }
//   // const getSigner = async provider => {
//   //   const signer = provider.getSigner();

//   //   signer.fundMe.address()
//   //     .then((address) => {
//   //       setSignerAddress(address)
//   //     })

//   //   return signer;
//   // }

//   const toWei = ether => ethers.utils.parseEther(ether)
//   // const toWei = ether => ethers.parseEther(ether)


//   const buyTokens = async () => {
//     const wei = toWei(amount)
//     await contract.connect(signer).buyTokens(signerAddress, {value: wei})
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {isConnected() ? (
//           <div>
//             <p>
//               Welcome {signerAddress?.substring(0,10)}...
//             </p>
//             <div className="list-group">
//               <div className="list-group-item">
//                 <div className="row py-3">

//                   <div className="col-md-2">
//                     <Tsunami className="rounded-circle" width="36" height="36" />
//                   </div>

//                   <div className="col-md-5">
//                     <input
//                       className="inputField"
//                       placeholder="0.0"
//                       onChange={e => setAmount(e.target.value)}
//                     />
//                   </div>

//                   <div className="d-flex gap-4 col-md-3">
//                     RXC
//                   </div>

//                   <div className="d-flex gap-4 col-md-2">
//                     <button
//                       className="btn btn-success"
//                       onClick={() => buyTokens()}>
//                       Buy
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <p>
//               You are not connected
//             </p>
//             <button onClick={connect} className="btn btn-primary">Connect Metamask</button>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { Tsunami } from 'react-bootstrap-icons';
// import './App.css';
// import artifact from './artifacts/contracts/Crowdsale.sol/Crowdsale.json';

// const CONTRACT_ADDRESS = '0x41c5585F34219CbCa42159BA3d5D333c56A3578E';

// function App() {
//   const [provider, setProvider] = useState(undefined);
//   const [signer, setSigner] = useState(undefined);
//   const [contract, setContract] = useState(undefined);
//   const [signerAddress, setSignerAddress] = useState(undefined);
//   const [amount, setAmount] = useState('');
//   const [halfAmount, setHalfAmount] = useState('');

//   useEffect(() => {
//     const onLoad = async () => {
//       const provider = await new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(provider);

//       const contract = await new ethers.Contract(
//         CONTRACT_ADDRESS,
//         artifact.abi,
//         provider
//       );
//       setContract(contract);
//     };
//     onLoad();
//   }, []);

//   const isConnected = () => signer !== undefined;

//   const connect = () => {
//     getSigner(provider).then((signer) => {
//       setSigner(signer);
//     });
//   };

//   const getSigner = async (provider) => {
//     const signer = provider.getSigner();

//     signer.getAddress().then((address) => {
//       setSignerAddress(address);
//     });

//     return signer;
//   };

//   const toWei = (ether) => ethers.utils.parseEther(ether);

//   const buyTokens = async () => {
//     const wei = toWei(halfAmount);
//     await sendToBackend(halfAmount);
//     await contract.connect(signer).buyTokens(signerAddress, { value: wei });
//   };

//   const sendToBackend = async (value) => {
//     console.log(`Sending ${value} to the backend`);
//     // Example using fetch:
//     // const response = await fetch('your-backend-endpoint', {
//     //   method: 'POST',
//     //   body: JSON.stringify({ halfAmount: value }),
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {isConnected() ? (
//           <div>
//             <p>Welcome {signerAddress?.substring(0, 10)}...</p>
//             <div className="list-group">
//               <div className="list-group-item">
//                 <div className="row py-3">
//                   <div className="col-md-2">
//                     <Tsunami className="rounded-circle" width="36" height="36" />
//                   </div>
//                   <div className="col-md-5">
//                     <input
//                       className="inputField"
//                       placeholder="0.0"
//                       onChange={(e) => {
//                         setAmount(e.target.value);
//                         const parsedAmount = parseFloat(e.target.value);
//                         setHalfAmount((parsedAmount / 2).toFixed(2));
//                       }}
//                     />
//                   </div>
//                   <div className="d-flex gap-4 col-md-3">RXC</div>
//                   <div className="d-flex gap-4 col-md-2">
//                     <button className="btn btn-success" onClick={() => buyTokens()}>
//                       Buy
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <p>You are not connected</p>
//             <button onClick={connect} className="btn btn-primary">
//               Connect Metamask
//             </button>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Tsunami } from 'react-bootstrap-icons';
import './App.css';
import artifact from './artifacts/contracts/Crowdsale.sol/Crowdsale.json';

const CONTRACT_ADDRESS = '0x41c5585F34219CbCa42159BA3d5D333c56A3578E';

function App() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  const [amount, setAmount] = useState('');
  const [halfAmount, setHalfAmount] = useState('');

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const contract = await new ethers.Contract(
        CONTRACT_ADDRESS,
        artifact.abi,
        provider
      );
      setContract(contract);
    };
    onLoad();
  }, []);

  const isConnected = () => signer !== undefined;

  const connect = () => {
    getSigner(provider).then((signer) => {
      setSigner(signer);
    });
  };

  const getSigner = async (provider) => {
    const signer = provider.getSigner();

    signer.getAddress().then((address) => {
      setSignerAddress(address);
    });

    return signer;
  };

  const toWei = (ether) => ethers.utils.parseEther(ether);

  const buyTokens = async () => {
    const wei = toWei(halfAmount);
    await sendToBackend(halfAmount);
    await contract.connect(signer).buyTokens(signerAddress, { value: wei });
  };

  const sendToBackend = async (value) => {
    console.log(`Sending ${value} to the backend`);
    // Example using fetch:
    // const response = await fetch('your-backend-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ halfAmount: value }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  };

  return (
    <div className="App">
    
      {/* <nav className="navbar navbar-expand-lg fw-bold fs-2">
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link p-3" href="#">Home</a>
            <a className="nav-item nav-link p-3" href="#">About</a>
            <a className="nav-item nav-link p-3" href="#">Help</a>
            <a className="nav-item nav-link p-3" href="#">Contact</a>
          </div>
        </div>
      </nav> */}

      <header className="App-header">
        <div className="welcome-text ml-700px">
          Welcome to ERC-20 Token Crowdsale
        </div>
        <p className="Title fw-bold fs-2"> RexCoin</p>

        {isConnected() ? (
          <div className='box'>
            <p className='head pb-4'>Welcome {signerAddress?.substring(0, 10)}...</p>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row py-3">
                  <div className="col-md-2">
                    <Tsunami className="rounded-circle" width="36" height="36" />
                  </div>
                  <div className="col-md-5">
                    <input
                      className="inputField"
                      placeholder="0.0"
                      onChange={(e) => {
                        setAmount(e.target.value);
                        const parsedAmount = parseFloat(e.target.value);
                        setHalfAmount((parsedAmount / 2).toFixed(2));
                      }}
                    />
                  </div>
                  <div className="d-flex gap-4 col-md-3">RXC</div>
                  <div className="d-flex gap-4 col-md-2">
                    <button className="btn btn-success" onClick={() => buyTokens()}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>You are not connected</p>
            <button onClick={connect} className="btn btn-primary">
              Connect Metamask
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

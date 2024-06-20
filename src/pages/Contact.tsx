import {useState} from 'react'
import AnimatedLink from '../components/AnimatedLink'
import ArrowTopRight from '../components/ArrowTopRight'
import socialLinks from '../../socialLinks.json'
import {analytics, db} from "../config/FirebaseConfig";
import {collection, addDoc} from "firebase/firestore";
import {logEvent} from "firebase/analytics";
import {toast} from "react-toastify";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')

    const collectionData = collection(db, "contacts");
    const data = {
        name, email, details
    }

    const submitForm = async (e: any) => {
        e.preventDefault()

        try {
            const docRef = await addDoc(collectionData, data)
            console.log("Document written with ID: ", docRef.id);
            alert('Message sent successfully!')
            logEvent(analytics, 'submit_form', {
                name: name,
                email: email,
                details: details
            })
            toast.success("✉️ Success send a message!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setName('')
            setEmail('')
            setDetails('')
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error("❌ Failed to send a message", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <div className="flex flex-col">
            <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
                <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
                    <div className="place-self-start lg:col-span-6">
                        <h1 className="mb-4 text-4xl font-medium tracking-normal md:text-5xl">
                            Get in touch
                        </h1>
                        <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl my-5">
                            I'm always open to new projects. Let's work together on your next big idea!
                        </p>
                        <div className="grid auto-cols-fr max-w-scree-xl sm:grid-cols-2 grid-cols-1 gap-10">
                            {
                                socialLinks.map((link) => <AnimatedLink key={link.link} title={link.title}
                                                                        link={link.link} isExternal={true}/>)
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <form onSubmit={submitForm}>
                            <div className="w-full mb-10">
                                <input
                                    type="text"
                                    className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                                    placeholder="Full name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="w-full mb-10">
                                <input
                                    type="email"
                                    className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                                    placeholder="Email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="w-full mb-10">
                <textarea
                    cols={30}
                    rows={4}
                    className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                    placeholder="Tell me about the project"
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
                            </div>
                            <button
                                className="
                  font-semibold
                  md:text-2xl
                  text-xl
                  inline-flex
                  items-center
                  gap-2
                  group
                  dark:text-white
                "
                            >
                                Submit message
                                <ArrowTopRight
                                    classNames="
                    w-7
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                    duration-200
                    dark:fill-gray-300
                  "
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
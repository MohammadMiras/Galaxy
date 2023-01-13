import Image from "next/image"

const Teams = () => {
    return <>
        <section>
            <h2>Expert Team Member</h2>
            <div className="max-w-7xl mx-10 px-20">
                <div className="flex ">
                    <div className="basis-1/4 ">
                        <div className="relative w-full h-10">
                            <Image
                                src={"https://barakahit.net/html/techmax/assets/img/team/team-4.jpg"}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3>Marc Gibbs</h3>
                        <p>Backend Developer</p>
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Teams
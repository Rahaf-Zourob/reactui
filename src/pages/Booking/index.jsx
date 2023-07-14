import React from "react";
import Image from "../../components/Image"
import ReadMore from "../../components/ReadMore"
import FeatureHeading from "../../components/FeatureHeading"
import Transparent from "../../components/Transparent";
import './style.css'
export default function Booking() {
    return (
        <Transparent>
            <div className="content__booking">
                <div className="tranlate__xplus">
                    <Image src="/assets/booking.png" alt="Booking logo" />
                </div>
                <div className="booking__detail">
                    <FeatureHeading variant="flex__rcol" heading="FLAT 10% OFFF"
                        description="Come join us for a lunch this weekend and enjoy" />
                    <ReadMore varint="btn__site">Book Table</ReadMore>
                </div>
                <div className="translate__xmins">
                    <Image src="/assets/booking.png" alt="Booking logo" />
                </div>
            </div>
        </Transparent>
    )
}
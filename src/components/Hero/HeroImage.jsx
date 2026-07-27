import { profile } from "../../data/profile";

export default function HeroImage() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="relative">

        {/* Background Glow */}
        <div
          className="
            absolute
            inset-0
            scale-110
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        {/* Main Image */}
        <div
          className="
            relative
            w-80
            h-80
            lg:w-[430px]
            lg:h-[430px]
            rounded-full
            overflow-hidden
            border-4
            border-blue-500
            shadow-2xl
            shadow-blue-500/30
            z-10
          "
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Left Circle */}
        <div
          className="
            absolute
            -top-6
            -left-6
            w-8
            h-8
            rounded-full
            bg-blue-500
            z-20
          "
        />

        {/* Bottom Right Circle */}
        <div
          className="
            absolute
            bottom-6
            -right-6
            w-6
            h-6
            rounded-full
            bg-purple-500
            z-20
          "
        />

        {/* Decorative Ring */}
        <div
          className="
            absolute
            -bottom-10
            -left-10
            w-24
            h-24
            rounded-full
            border
            border-blue-500/30
            z-0
          "
        />
      </div>
    </div>
  );
}
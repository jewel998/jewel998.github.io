import { Chip } from "@/components/ui/chip";
import { HomeSection } from "./section";
import { Plus } from "@/components/ui/plus";
import { Dot } from "@/components/ui/dot";
import { Link } from "@tanstack/react-router";

export function HomeContact() {
  return (
    <HomeSection>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Chip
                variant="dashed"
                className="border-primary/40 text-emerald-800 dark:text-emerald-200 bg-lime-50 dark:bg-lime-950"
              >
                <Dot
                  color="bg-emerald-500 dark:bg-emerald-400"
                  ping
                  pingColor="bg-emerald-400 dark:bg-emerald-500"
                />
                <span className="font-medium text-xs">Available for work</span>
                <Plus position="top-left" />
                <Plus position="top-right" />
                <Plus position="bottom-left" />
                <Plus position="bottom-right" />
              </Chip>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Work Together
            </h2>
          </div>

          <div className="flex justify-center pt-8">
            <div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-medium transition-all duration-200">
                <Link to="/contact">Get In Touch</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}

import { GraduationCap, Users, Award, Globe } from "lucide-react"

export  function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "5,000",
      suffix: "+",
      label: "Students Guided",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      value: "150",
      suffix: "+",
      label: "Partner Universities",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Globe,
      value: "25",
      suffix: "+",
      label: "Countries Covered",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Award,
      value: "98",
      suffix: "%",
      label: "Success Rate",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering thousands of students to achieve their global education dreams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className={`${stat.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
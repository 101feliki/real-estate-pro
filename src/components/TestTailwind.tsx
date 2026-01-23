// src/components/TestTailwind.tsx
export const TestTailwind = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-600 mb-4">
        Tailwind CSS Test
      </h1>
      <div className="space-y-4">
        <button className="btn-primary">
          Primary Button
        </button>
        <button className="btn-secondary">
          Secondary Button
        </button>
        <input 
          type="text" 
          className="input" 
          placeholder="Test input" 
        />
        <div className="card p-4">
          This is a card component
        </div>
      </div>
    </div>
  )
}
import DashboardLayout from "../layouts/DashboardLayout";

const UploadModel = () => {
  return (
    <DashboardLayout>
      <div className="border-2 border-dashed border-slate-700 rounded-3xl p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Upload 3D Model
        </h1>

        <p className="text-slate-400 mb-6">
          Upload .glb, .gltf or .fbx files
        </p>

        <input type="file" />
      </div>
    </DashboardLayout>
  );
};

export default UploadModel;